using System;
namespace austendewolfdotcom.DTOs
{
    public class BaseODTO
    {
        public BaseODTO()
        {
        }

        public string Id { get; set; }

        public string CreatedById { get; set; }

        public string ModifiedById { get; set; }

        public DateTime? Created { get; set; }

        public DateTime? Modified { get; set; }

        //public ApplicationUserODTO CreatedBy { get; set; }

        //public ApplicationUserODTO ModifiedBy { get; set; }
    }
}
