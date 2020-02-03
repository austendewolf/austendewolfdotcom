using System;
using System.Threading.Tasks;
using austendewolfdotcom.DTOs.Contact;

namespace austendewolfdotcom.Interfaces.Services
{
    public interface IContactService
    {
        Task Create(ContactIDTO contact);
    }
}
