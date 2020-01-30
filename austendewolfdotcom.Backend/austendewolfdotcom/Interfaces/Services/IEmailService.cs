using System;
using System.Threading.Tasks;
using austendewolfdotcom.DTOs.Email;

namespace austendewolfdotcom.Interfaces.Services
{
    public interface IEmailService
    {
        Task<EmailODTO> SendAsync(EmailOptions options);
    }
}
