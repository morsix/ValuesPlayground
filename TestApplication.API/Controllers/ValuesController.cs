using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace TestApplication.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        readonly List<Vehicle> vehicleList = new List<Vehicle>
            {
                new Vehicle
                {
                    Id = 1,
                    Make = "Honda",
                    Model = "Civic",
                    Year = 2019,
                    Price = 15000,
                    ImageLink = "https://m.atcdn.co.uk/a/media/w1024/b9acf31a012f4a6791f8d6065e850b20.jpg"
                },
                new Vehicle
                {
                    Id = 2,
                    Make = "Vauxhall",
                    Model = "Insignia",
                    Year = 2019,
                    Price = 18000,
                    ImageLink = "https://m.atcdn.co.uk/a/media/w800h600/9099631356e2442a9f827a5939767a11.jpg"
                },
                new Vehicle
                {
                    Id = 3,
                    Make = "Vauxhall",
                    Model = "Corsa",
                    Year = 2015,
                    Price = 1250,
                    ImageLink = "https://m.atcdn.co.uk/a/media/w800h600/f484c0152d1847aea1e8276084478561.jpg"
                },
                new Vehicle
                {
                    Id = 4,
                    Make = "Renault",
                    Model = "Twingo",
                    Year = 2008,
                    Price = 1280,
                    ImageLink = "https://m.atcdn.co.uk/a/media/w800h600/869d88f95cd84026a8aee85b32bd8485.jpg"
                },
                new Vehicle
                {
                    Id = 5,
                    Make = "Mercedes-Benz",
                    Model = "E Class",
                    Year = 2019,
                    Price = 39000,
                    ImageLink = "https://m.atcdn.co.uk/a/media/w800h600/5828bb9b73ea4974b5aa5bf1f77cb017.jpg"
                },
                new Vehicle
                {
                    Id = 6,
                    Make = "Bentley",
                    Model = "Continental",
                    Year = 2018,
                    Price = 88850,
                    ImageLink = "https://m.atcdn.co.uk/a/media/w800h600/a6a44baaa15d420ea3a487a92bbc015d.jpg"
                },
                new Vehicle
                {
                    Id = 7,
                    Make = "Audi",
                    Model = "Q7",
                    Year = 2017,
                    Price = 35000,
                    ImageLink = "https://m.atcdn.co.uk/a/media/w800h600/b9f00d58cf7941bb8015c9a7e2306a72.jpg"
                }
            };
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Vehicle>> Get()
        {
            
            return vehicleList;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Vehicle> Get(long id)
        {
            var car = vehicleList.Find(el => el.Id == id);
            return car;
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }

    public class Vehicle {
        public long Id { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public double Price { get; set; }
        public string ImageLink { get; set; }
        public int Year { get; set; }
    }
}
