using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Net.Mail;

namespace austendewolfdotcom.DTOs.Email
{
    public class EmailOptions
    {
        public EmailOptions()
        {
            this.TemplateData = new ExpandoObject();
            this.To = new List<MailAddress>();
            this.Cc = new List<MailAddress>();
            this.Bcc = new List<MailAddress>();
        }

        public string TemplateId { get; set; }

        //  Email variables
        public MailAddress From { get; set; }
        public List<MailAddress> To { get; set; }
        public List<MailAddress> Cc { get; set; }
        public List<MailAddress> Bcc { get; set; }
        public dynamic TemplateData { get; set; }

        //  Default value overrides
        public string SenderName { get; set; }
        public string SenderAddress { get; set; }
        public string SenderCity { get; set; }
        public string SenderState { get; set; }
        public string SenderZip { get; set; }
    }
}
