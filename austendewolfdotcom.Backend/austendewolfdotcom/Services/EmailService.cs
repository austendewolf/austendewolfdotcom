using System;
using System.Linq;
using System.Threading.Tasks;
using austendewolfdotcom.Configuration;
using austendewolfdotcom.DTOs.Email;
using austendewolfdotcom.Interfaces.Services;
using Microsoft.Extensions.Options;
using SendGrid;
using SendGrid.Helpers.Mail;

namespace austendewolfdotcom.Services
{
    public class EmailService : IEmailService
    {
        private readonly ApplicationSettings _appSettings;
        private readonly SendGridClient _emailClient;

        public EmailService(
            IOptions<ApplicationSettings> appSettings)
        {
            this._appSettings = appSettings.Value;
            this._emailClient = new SendGridClient(this._appSettings.Configuration.SendGridApiKey);
        }

        public async Task<EmailODTO> SendAsync(EmailOptions options)
        {
            this.AddBaseSubstitutions(options.TemplateData);

            var email = new SendGridMessage();
            email.TemplateId = options.TemplateId;
            email.From = new EmailAddress(options.From.Address, options.From.DisplayName);
            email.SetTemplateData(options.TemplateData);

            if (options.To.Any())
            {
                email.AddTos(options.To.Select(x => new EmailAddress(x.Address, x.DisplayName)).ToList());
            }

            if (options.Cc.Any())
            {
                email.AddCcs(options.Cc.Select(x => new EmailAddress(x.Address, x.DisplayName)).ToList());
            }

            if (options.Bcc.Any())
            {
                email.AddBccs(options.Bcc.Select(x => new EmailAddress(x.Address, x.DisplayName)).ToList());
            }

            var response = await this._emailClient.SendEmailAsync(email);

            return new EmailODTO();
        }

        private void AddBaseSubstitutions(dynamic templateData)
        {
            templateData.sender_name = this._appSettings.Configuration.CompanyName;
            templateData.sender_address = this._appSettings.Configuration.CompanyAddress;
            templateData.sender_city = this._appSettings.Configuration.CompanyCity;
            templateData.sender_state = this._appSettings.Configuration.CompanyState;
            templateData.sender_zip = this._appSettings.Configuration.CompanyZipcode;
        }
    }
}
