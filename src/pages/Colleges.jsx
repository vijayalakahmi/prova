import { useMemo, useState } from 'react';
import { PageHeader } from '../components/layout';
import { Input, Select } from '../components/form';
import { Button, SectionHeading, Card } from '../components/common';
import { InstitutionCard, CtaBanner, EnquiryForm } from '../components/sections';
import { institutions, institutionTypes, programOptions } from '../data/institutions';
import './Institutions.scss';

function Colleges() {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');
  const [program, setProgram] = useState('all');

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();

    return institutions.filter((item) => {
      const matchesType = type === 'all' || item.type === type;
      const matchesProgram = program === 'all' || item.programs.includes(program);
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        (item.area || '').toLowerCase().includes(query) ||
        (item.city || '').toLowerCase().includes(query) ||
        item.streams.some((s) => s.toLowerCase().includes(query));

      return matchesType && matchesProgram && matchesSearch;
    });
  }, [search, type, program]);

  const resetFilters = () => {
    setSearch('');
    setType('all');
    setProgram('all');
  };

  return (
    <>
      <PageHeader
        eyebrow="Colleges"
        title="Explore college options"
        description="We are building a clear view of institutions we can guide you on. For current options, talk to a counsellor — especially for healthcare, medical and professional programs."
      />

      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Building our network"
            title="College information is being updated"
            subtitle="These cards show the areas we actively guide on. Ask us for current college options that fit your course, eligibility and location."
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="institutions__filters">
            <Input
              name="search"
              label="Search"
              placeholder="Search by focus area or location"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Select
              name="type"
              label="Institution Type"
              options={institutionTypes}
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
            <Select
              name="program"
              label="Program Level"
              options={programOptions}
              value={program}
              onChange={(e) => setProgram(e.target.value)}
            />
          </div>

          <div className="institutions__summary">
            <p className="text-muted">
              Showing <strong>{filtered.length}</strong> guidance areas
            </p>
            {(search || type !== 'all' || program !== 'all') && (
              <Button variant="ghost" size="sm" onClick={resetFilters}>
                Clear filters
              </Button>
            )}
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid--3">
              {filtered.map((item) => (
                <InstitutionCard key={item.id} institution={item} />
              ))}
            </div>
          ) : (
            <div className="institutions__empty">
              <h3>No matches for these filters</h3>
              <p className="text-muted">Try a different search or talk to a counsellor for current options.</p>
              <Button variant="outline" onClick={resetFilters}>
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <section className="section section--soft">
        <div className="container institutions-lead">
          <SectionHeading
            align="left"
            eyebrow="Need a shortlist?"
            title="Tell us what you are looking for"
            subtitle="Share your course interest and preferred location. We'll help you explore suitable college options."
          />
          <Card padding="lg">
            <EnquiryForm source="colleges-page" submitLabel="Explore My Options" />
          </Card>
        </div>
      </section>

      <CtaBanner
        title="Want current college options for your course?"
        text="A counsellor can walk you through what fits your eligibility and goals."
        buttonLabel="Get Free Guidance"
      />
    </>
  );
}

export default Colleges;
