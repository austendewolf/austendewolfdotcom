using System;
using System.Threading.Tasks;
using austendewolfdotcom.DTOs.Contact;
using austendewolfdotcom.Interfaces.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace austendewolfdotcom.Controllers
{
    [AllowAnonymous]
    [ApiController]
    [Route("api/contacts")]
    public class ContactController : ControllerBase
    {
        private readonly IContactService _contactService;

        public ContactController(IContactService contactService)
        {
            this._contactService = contactService;
        }

        [HttpPost("")]
        public async Task<IActionResult> Create([FromBody] ContactIDTO model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await this._contactService.Create(model);

            return Ok();
        }
    }
}
