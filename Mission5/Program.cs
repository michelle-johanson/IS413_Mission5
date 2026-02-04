var builder = WebApplication.CreateBuilder(args);

// Set up services
builder.Services.AddControllersWithViews();

var app = builder.Build();

// app.UseDefaultFiles();
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseAuthorization();
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}"
);
app.Run();