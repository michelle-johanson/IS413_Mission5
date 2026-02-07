using Microsoft.AspNetCore.Mvc;

namespace Mission5.Controllers;

public class HomeController : Controller
{
    // GET
    public IActionResult Index()
    {
        return View();
    }
    
    public IActionResult Calculator()
    {
        return View();
    }
}