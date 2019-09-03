using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace TestApplication.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Vehicle>> Get()
        {
            var items = new List<Vehicle>
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

            };
            return items;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
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
