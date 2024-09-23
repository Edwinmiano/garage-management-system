import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    name: 'Oil Change',
    description: "Regular oil changes are crucial for maintaining your engine's health and performance. Our expert technicians will drain the old oil, replace the oil filter, and refill with high-quality oil suited for your vehicle.",
    duration: '30-45 minutes',
    price: '$50-$100',
    recommended: "Every 3,000-5,000 miles or as specified in your owner's manual"
  },
  {
    name: 'Tire Rotation and Balance',
    description: "Ensure even tire wear and improved vehicle handling with our tire rotation and balancing service. We'll rotate your tires to the correct positions and balance them to eliminate vibrations and extend tire life.",
    duration: '45-60 minutes',
    price: '$40-$80',
    recommended: 'Every 5,000-8,000 miles'
  },
  {
    name: 'Brake Service',
    description: "Your vehicle's braking system is critical for safety. Our comprehensive brake service includes inspection of brake pads, rotors, and calipers, replacement of worn components, and brake fluid top-up or flush as needed.",
    duration: '1-3 hours',
    price: '$150-$400',
    recommended: 'When you notice squeaking, reduced braking performance, or every 12,000 miles'
  },
  {
    name: 'Engine Tune-Up',
    description: "Keep your engine running smoothly with our tune-up service. We'll replace spark plugs, check and adjust idle speed, inspect fuel and ignition systems, and perform necessary adjustments to optimize engine performance.",
    duration: '2-4 hours',
    price: '$200-$400',
    recommended: 'Every 30,000 miles or when experiencing performance issues'
  },
  {
    name: 'Air Conditioning Service',
    description: "Ensure your car's AC system is ready for hot weather. Our service includes checking refrigerant levels, inspecting for leaks, cleaning the condenser, and recharging the system if necessary.",
    duration: '1-2 hours',
    price: '$100-$200',
    recommended: 'Annually or when noticing reduced cooling performance'
  },
  {
    name: 'Transmission Fluid Change',
    description: "Maintain your transmission's health with our fluid change service. We'll drain the old fluid, replace the transmission filter if applicable, and refill with new, high-quality transmission fluid.",
    duration: '1-2 hours',
    price: '$150-$250',
    recommended: 'Every 30,000-60,000 miles, depending on your vehicle and driving conditions'
  }
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Garage Services</h1>
      <p className="text-lg text-center mb-12">We offer a wide range of automotive services to keep your vehicle running smoothly and safely.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{service.name}</CardTitle>
              <CardDescription>
                <Badge variant="secondary" className="mr-2">
                  Duration: {service.duration}
                </Badge>
                <Badge variant="secondary">
                  Price: {service.price}
                </Badge>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-4">{service.description}</p>
              <p className="text-sm text-muted-foreground">
                <strong>Recommended:</strong> {service.recommended}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
