import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBlogSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_blog_seos';
  info: {
    displayName: 'blogSeo';
  };
  attributes: {
    canonicalURL: Schema.Attribute.Text & Schema.Attribute.Required;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaKeywords: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    ogDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    ogImageUrl: Schema.Attribute.String & Schema.Attribute.Required;
    ogTitle: Schema.Attribute.Text & Schema.Attribute.Required;
    ogType: Schema.Attribute.String & Schema.Attribute.DefaultTo<'article'>;
    ogUrl: Schema.Attribute.String & Schema.Attribute.Required;
    robots: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'index,follow'>;
    structuredData: Schema.Attribute.JSON & Schema.Attribute.Required;
    twitterCard: Schema.Attribute.Enumeration<
      ['summary', 'summary_large_image']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'summary_large_image'>;
    twitterDescription: Schema.Attribute.String & Schema.Attribute.Required;
    twitterImageUrl: Schema.Attribute.String & Schema.Attribute.Required;
    twitterTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    canonicalURL: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaKeywords: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    ogDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    ogImage: Schema.Attribute.Text & Schema.Attribute.Required;
    ogTitle: Schema.Attribute.Text & Schema.Attribute.Required;
    ogType: Schema.Attribute.Text & Schema.Attribute.Required;
    ogUrl: Schema.Attribute.Text & Schema.Attribute.Required;
    robots: Schema.Attribute.Text & Schema.Attribute.Required;
    structuredData: Schema.Attribute.JSON;
    twitterCard: Schema.Attribute.Enumeration<
      ['summary', 'summary_large_image']
    >;
    twitterDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    twitterImage: Schema.Attribute.Text & Schema.Attribute.Required;
    twitterTitle: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTechStacks extends Struct.ComponentSchema {
  collectionName: 'components_shared_tech_stacks';
  info: {
    displayName: 'techStacks';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.blog-seo': SharedBlogSeo;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.tech-stacks': SharedTechStacks;
    }
  }
}
