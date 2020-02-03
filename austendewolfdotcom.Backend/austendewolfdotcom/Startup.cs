using austendewolfdotcom.Configuration;
using austendewolfdotcom.Interfaces.Services;
using austendewolfdotcom.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace ADeWolf.com
{
    public class Startup
    {
        private IConfiguration _configuration { get; }
        private ApplicationSettings _appSettings;

        public Startup(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<ApplicationSettings>(this._configuration);

            this._appSettings = this._configuration.Get<ApplicationSettings>();

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            //  Application Services (Custom)
            services.AddScoped<IEmailService, EmailService>();
            services.AddScoped<IContactService, ContactService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseMvc();
        }
    }
}
