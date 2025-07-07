
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from 'lucide-react';

const LocationsSection = () => {
  const locations = [
    {
      city: 'Dhaka',
      region: 'Capital Region',
      description: 'Our headquarters serving the heart of Bangladesh\'s business district',
      services: ['Web Development', 'E-commerce', 'UI/UX Design', 'Digital Marketing'],
      projects: 150,
      established: '2019'
    },
    {
      city: 'Chittagong',
      region: 'Port City',
      description: 'Strategic location serving the commercial hub of southeastern Bangladesh',
      services: ['Web Development', 'E-commerce', 'UI/UX Design'],
      projects: 75,
      established: '2021'
    },
    {
      city: 'Sylhet',
      region: 'Northeast Region',
      description: 'Growing tech presence in the tea capital of Bangladesh',
      services: ['Web Development', 'Digital Marketing'],
      projects: 45,
      established: '2022'
    },
    {
      city: 'Rajshahi',
      region: 'Northern Region',
      description: 'Expanding services to serve the silk city and surrounding areas',
      services: ['E-commerce', 'Digital Marketing'],
      projects: 30,
      established: '2023'
    }
  ];

  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
          Our Locations Across Bangladesh
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Local expertise with national reach - serving businesses throughout Bangladesh
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {locations.map((location, index) => (
          <Card 
            key={index}
            className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-0"
          >
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">
                    {location.city}
                  </h3>
                  <p className="text-slate-500">{location.region}</p>
                </div>
              </div>
              
              <p className="text-slate-600 mb-6">
                {location.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">
                    {location.projects}+
                  </div>
                  <div className="text-sm text-slate-600">Projects</div>
                </div>
                <div className="text-center p-4 bg-indigo-50 rounded-lg">
                  <div className="text-2xl font-bold text-indigo-600">
                    {location.established}
                  </div>
                  <div className="text-sm text-slate-600">Established</div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-slate-800 mb-3">Services Available:</h4>
                <div className="flex flex-wrap gap-2">
                  {location.services.map((service, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              
              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                Contact {location.city} Office
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LocationsSection;
