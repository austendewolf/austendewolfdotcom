using System;
using System.Threading.Tasks;
using austendewolfdotcom.DTOs.Contact;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace austendewolfdotcom.Controllers
{
    [AllowAnonymous]
    [ApiController]
    [Route("api/contacts")]
    public class ContactController : ControllerBase
    {
        public ContactController()
        {
        }

        [HttpPost("")]
        public async Task<IActionResult> Create([FromBody] ContactIDTO model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            return Ok();
        }
    }
}
