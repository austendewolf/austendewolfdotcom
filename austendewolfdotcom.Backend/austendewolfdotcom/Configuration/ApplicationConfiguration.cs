using System;
namespace austendewolfdotcom.Configuration
{
    public class ApplicationConfiguration
    {
        //  Database
        public string DefaultConnection { get; set; }

        //  Application contacts
        public string ApplicationContactEmail { get; set; }
        public string ApplicationContactName { get; set; }

        //  TipTapp Company
        public string CompanyName { get; set; }
        public string CompanyAddress { get; set; }
        public string CompanyCity { get; set; }
        public string CompanyState { get; set; }
        public string CompanyZipcode { get; set; }

        //  SendGrid
        public string SendGridApiKey { get; set; }
        public string SendGridParagraphSingleActionTemplateId { get; set; }
    }
}
