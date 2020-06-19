using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Net.Mail;
using System.Threading.Tasks;
using austendewolfdotcom.Configuration;
using austendewolfdotcom.DTOs.Contact;
using austendewolfdotcom.DTOs.Email;
using austendewolfdotcom.Interfaces.Services;
using Microsoft.Extensions.Options;

namespace austendewolfdotcom.Services
{
    public class ContactService : IContactService
    {
        private readonly IEmailService _emailService;
        private readonly IOptions<ApplicationSettings> _appSettings;

        public ContactService(
            IEmailService emailService,
            IOptions<ApplicationSettings> appSettings)
        {
            this._appSettings = appSettings;
            this._emailService = emailService;
        }

        public async Task Create(ContactIDTO contact)
        {
            dynamic templateData = new ExpandoObject();
            templateData.firstName = contact.FirstName;
            templateData.lastName = contact.LastName;
            templateData.email = contact.Email;
            templateData.body = contact.Message;

            await this._emailService.SendAsync(new EmailOptions()
            {
                To = new List<MailAddress>()
                {
                    new MailAddress(this._appSettings.Value.Configuration.ApplicationContactEmail)
                },
                From = new MailAddress(contact.Email),
                TemplateData = templateData,
            });
        }
    }
}
