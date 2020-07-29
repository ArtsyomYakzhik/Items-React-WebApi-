using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ItemApi.Model
{
    public class MongoService
    {
        private IMongoCollection<Item> items;
        public MongoService(IMongoSettings settings)
        {
            MongoClient client = new MongoClient(settings.ConnectionString);
            IMongoDatabase database = client.GetDatabase(settings.DatabaseName);

            items = database.GetCollection<Item>(settings.ItemsCollectionName);
        }

        public List<Item> GetItems() => items.Find(item => true).ToList();

        public Item AddItem(Item item)
        {
            items.InsertOne(item);
            return item;
        }

        public bool Remove(string id)
        {
            try
            {
                items.DeleteOne(item => item.Id == id);
                return true;
            }

            catch(Exception)
            {
                return false;
            }
        }
    }
}
