type Address = {
  premises: string;
  postal_code: string;
  country: string;
  locality: string;
  address_line_1: string;
};
export type CompanyDetail = {
  company_status: string;
  address_snippet: string;
  date_of_creation: string;
  matches: {
    title: [number, number];
  };
  description: string;
  links: {
    self: string;
  };
  company_number: string;
  title: string;
  company_type: string;
  address: Address;
  kind: "searchresults#company";
  description_identifier: [string];
};

export type SearchResults = {
  page_number: number;
  kind: "search#companies";
  total_results: number;
  items: CompanyDetail[];
};

export type OfficerList = {
  etag: string;
  links: {
    self: string;
  };
  kind: "officer-list";
  items_per_page: number;
  items: [
    {
      address: Address;
      name: string;
      appointed_on: string;
      officer_role: string;
      links: {
        officer: {
          appointments: string;
        };
      };
      date_of_birth: {
        month: number;
        year: number;
      };
      occupation: string;
      country_of_residence: string;
      nationality: string;
    },
  ];
  active_count: number;
  total_results: number;
};
