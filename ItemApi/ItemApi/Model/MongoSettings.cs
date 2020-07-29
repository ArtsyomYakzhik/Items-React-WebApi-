using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ItemApi.Model
{
    public class MongoSettings: IMongoSettings
    {
        public string ItemsCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IMongoSettings
    {
        public string ItemsCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}
