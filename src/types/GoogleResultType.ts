/**
 * @tldr
 * ts: timestamp in string.
 */

interface ResultMetaInterface {
  ts: string;
  device_region: string;
  device_type: string;
}

interface DetailInterface {
  base: string;
  language: string | null;
  type: string;
  value: string;
}

export interface SearchOrImageOrVideoResultInterface extends ResultMetaInterface {
  results: {
    title: string;
    link: string;
    description: string;
    additional_links: {
      text: string;
      href: string;
    }[];
    cite: {
      domain: string;
      span: string;
    };
  }[];
  total: number | null;
  answers: string[];
  image_results: {
    image: {
      src: string;
      alt: string;
    };
    link: {
      href: string;
      title: string;
      domain: string;
    };
  }[];
}

export interface NewsResultType {
  feed: {
    generator: string;
    generator_detail: {
      name: string;
    };
    language: string;
    link: string;
    links: {
      href: string;
      rel: string;
      type: string;
    }[];
    publisher: string;
    publisher_detail: {
      email: string;
    };
    rights: string;
    rights_detail: DetailInterface;
    subtitle: string;
    subtitle_detail: DetailInterface;
    title: string;
    title_detail: DetailInterface;
    updated: string;
    updated_parsed: string[];
  };
  entries: {
    guidislink: boolean;
    id: string;
    link: string;
    links: {
      href: string;
      rel: string;
      type: string;
    }[];
    published: string;
    published_parsed: string[];
    source: {
      href: string;
      title: string;
    };
    sub_articles: {
      url: string;
      title: string;
      publisher: string;
    }[];
    summary: string;
    summary_detail: DetailInterface;
    title: string;
    title_detail: DetailInterface;
  }[];
}
