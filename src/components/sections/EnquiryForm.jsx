import { useEffect, useState } from 'react';
import { Input, Select, Textarea, Checkbox } from '../form';
import { Button, Alert } from '../common';
import { courseInterestOptions, qualificationOptions, locationOptions } from '../../data/courses';
import { siteConfig } from '../../data/siteConfig';
import {
  buildLeadPayload,
  buildWhatsAppMessage,
  getWhatsAppUrl,
  submitLeadToGoogleSheet,
} from '../../data/leads';
import './EnquiryForm.scss';

const initialValues = {
  name: '',
  phone: '',
  email: '',
  courseInterest: '',
  qualification: '',
  preferredLocation: '',
  message: '',
  consent: false,
};

function validate(values) {
  const errors = {};

  if (!values.name.trim()) errors.name = 'Please enter your name.';

  if (!values.phone.trim()) {
    errors.phone = 'Please enter your WhatsApp / phone number.';
  } else if (!/^[6-9]\d{9}$/.test(values.phone.replace(/\s/g, ''))) {
    errors.phone = 'Enter a valid 10-digit Indian mobile number.';
  }

  if (!values.courseInterest) errors.courseInterest = 'Please select a course interest.';
  if (!values.consent) errors.consent = 'Please agree so we can contact you.';

  if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  return errors;
}

/**
 * Reusable lead-capture form.
 * Saves to Google Sheet (Apps Script), then offers WhatsApp follow-up.
 */
function EnquiryForm({
  compact = false,
  initialCourseInterest = '',
  source = 'enquiry-form',
  dreamSelection,
  submitLabel = 'Get My Free Guidance',
}) {
  const [values, setValues] = useState({
    ...initialValues,
    courseInterest: initialCourseInterest,
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState('');

  useEffect(() => {
    if (initialCourseInterest) {
      setValues((prev) => ({ ...prev, courseInterest: initialCourseInterest }));
    }
  }, [initialCourseInterest]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setValues((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitError('');

    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);

    const lead = buildLeadPayload(values, { source, dreamSelection });
    const message = buildWhatsAppMessage(lead);
    const url = getWhatsAppUrl(siteConfig.whatsapp, message);

    try {
      await submitLeadToGoogleSheet(lead);
      setWhatsappUrl(url);
      setSubmitted(true);
      setValues({ ...initialValues, courseInterest: initialCourseInterest });
    } catch (error) {
      setSubmitError(error.message || 'Something went wrong while saving your enquiry. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <Alert type="success" title="Thanks — your enquiry is saved." onClose={() => setSubmitted(false)}>
        <p>
          A counsellor can follow up from here. You can also continue on WhatsApp if that is easier.
        </p>
        <div className="enquiry-form__next">
          <Button href={whatsappUrl} size="md" target="_blank" rel="noreferrer">
            Continue on WhatsApp
          </Button>
          <Button href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} variant="outline" size="md">
            Call {siteConfig.shortName}
          </Button>
        </div>
      </Alert>
    );
  }

  return (
    <form className={`enquiry-form ${compact ? 'enquiry-form--compact' : ''}`.trim()} onSubmit={handleSubmit} noValidate>
      <div className="enquiry-form__row">
        <Input
          name="name"
          label="Name"
          placeholder="Your full name"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
          required
        />
        <Input
          name="phone"
          label="Phone / WhatsApp"
          type="tel"
          placeholder="10-digit mobile number"
          value={values.phone}
          onChange={handleChange}
          error={errors.phone}
          required
        />
      </div>

      <Select
        name="courseInterest"
        label="Course interest"
        options={courseInterestOptions}
        placeholder="What are you exploring?"
        value={values.courseInterest}
        onChange={handleChange}
        error={errors.courseInterest}
        required
      />

      {!compact && (
        <Input
          name="email"
          label="Email"
          type="email"
          placeholder="you@example.com (optional)"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />
      )}

      <div className="enquiry-form__row">
        <Select
          name="qualification"
          label="Current qualification"
          options={qualificationOptions}
          placeholder="Optional"
          value={values.qualification}
          onChange={handleChange}
        />
        <Select
          name="preferredLocation"
          label="Preferred location"
          options={locationOptions}
          placeholder="Optional"
          value={values.preferredLocation}
          onChange={handleChange}
        />
      </div>

      <Textarea
        name="message"
        label="Anything else we should know?"
        placeholder="Marks range, budget thoughts, or specific colleges — optional."
        value={values.message}
        onChange={handleChange}
        rows={compact ? 3 : 4}
        hint="Optional — helps us prepare for your counselling call."
      />

      <Checkbox
        name="consent"
        label="I agree to be contacted by PROVA via phone, WhatsApp or email for guidance."
        checked={values.consent}
        onChange={handleChange}
        error={errors.consent}
      />

      {submitError && (
        <Alert type="error" title="Could not save enquiry">
          {submitError}
        </Alert>
      )}

      <Button type="submit" size="lg" fullWidth loading={submitting}>
        {submitLabel}
      </Button>
    </form>
  );
}

export default EnquiryForm;
