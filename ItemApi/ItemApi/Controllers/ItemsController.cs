using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ItemApi.Model;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ItemApi.Controllers
{
    [EnableCors]
    [Route("api/[controller]")]
    [ApiController]
    public class ItemsController : ControllerBase
    {
        private MongoService mongoService;

        public ItemsController(MongoService mongoService)
        {
            this.mongoService = mongoService;
        }
        [HttpGet]
        public IEnumerable<Item> Get() => mongoService.GetItems();

        [HttpPost]
        public Item Post([FromBody]Item item) => item != null?mongoService.AddItem(item):new Item();

        [HttpDelete]
        public bool Delete([FromQuery]string id) => id != null?mongoService.Remove(id):false;
    }
}
