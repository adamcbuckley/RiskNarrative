export type SearchResults = {
  page_number: number;
  kind: "search#companies";
  total_results: number;
  items: {
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
    address: {
      premises: string;
      postal_code: string;
      country: string;
      locality: string;
      address_line_1: string;
    };
    kind: "searchresults#company";
    description_identifier: [string];
  }[];
};
