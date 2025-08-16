import WMCLI from "../assets/WMCLI.png";

const ClientsPartnersSection = () => {
  return (
    <div id ="clients" className="py-20 bg-maritime-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Clients and Partners 
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We partner with leading organizations across the globe, 
            building lasting relationships based on excellence and mutual growth.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Active Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">200+</div>
            <div className="text-muted-foreground">Vessels Supported</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Client Retention</div>
          </div>
        </div>

        {/* Clients Logos Image */}
        <div className="mb-16">
          <img 
            src={WMCLI} 
            alt="Our trusted clients and partners" 
            className="w-full h-auto rounded-xl shadow-lg border border-border"
          />
        </div>

        {/* Call to Action */}
   
      </div>
    </div>
  );
};

export default ClientsPartnersSection;