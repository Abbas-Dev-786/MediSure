import { useEffect, useState } from "react";
import Maps from "../components/Maps";
import countriesList from "../assets/data/country_list.json";
import Map from "../components/Map";

const DemoPage = () => {
  const [selectedSourceCountry, setSelectedSourceCountry] = useState("");
  const [selectedDestinationCountry, setSelectedDestinationCountry] =
    useState("");
  const [sourcePorts, setSourcePorts] = useState([]);
  const [destinationPorts, setDestinationPorts] = useState([]);
  const [sourcePort, setSourcePort] = useState("");
  const [destinationPort, setDestinationPort] = useState("");
  const [shouldFetchRoute, setShouldFetchRoute] = useState(false);

  const countries = countriesList;

  const loadPortsData = async (country) => {
    if (country) {
      try {
        const portData = await import(
          `../assets/data/country_jsons/${country}.json`
        );
        return portData.default || [];
      } catch (error) {
        console.error(`Error loading ports for ${country}:`, error);
        return [];
      }
    }
    return [];
  };

  useEffect(() => {
    const fetchSourcePorts = async () => {
      const ports = await loadPortsData(selectedSourceCountry);
      setSourcePorts(ports);
      setSourcePort("");
    };
    fetchSourcePorts();
  }, [selectedSourceCountry]);

  useEffect(() => {
    const fetchDestinationPorts = async () => {
      const ports = await loadPortsData(selectedDestinationCountry);
      setDestinationPorts(ports);
      setDestinationPort("");
    };
    fetchDestinationPorts();
  }, [selectedDestinationCountry]);

  const selectedSourcePortDetails = sourcePorts.find(
    (port) => port.code === sourcePort
  );

  const selectedDestinationPortDetails = destinationPorts.find(
    (port) => port.code === destinationPort
  );

  const handleSearch = (e) => {
    e.preventDefault();
    setShouldFetchRoute(true);
  };

  const handleRouteFetched = (success) => {
    setShouldFetchRoute(false);
  };

  return (
    <div className="container mx-auto mt-10">
      <form
        onSubmit={handleSearch}
        className="flex items-end flex-wrap gap-6 mx-3 md:gap-8 mb-6"
      >
        {/* Country and port selection inputs */}
        <div className="w-full md:w-1/5">
          <label
            htmlFor="source-country"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Select Source Country
          </label>
          <select
            id="source-country"
            value={selectedSourceCountry}
            onChange={(e) => setSelectedSourceCountry(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={`source-${country}`} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full md:w-1/5">
          <label
            htmlFor="source-port"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Select Source Port
          </label>
          <select
            id="source-port"
            value={sourcePort}
            onChange={(e) => setSourcePort(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            disabled={!selectedSourceCountry}
          >
            <option value="">Select Source Port</option>
            {sourcePorts.map((port) => (
              <option key={`source-${port.code}`} value={port.code}>
                {port.name} - {port.city}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full md:w-1/5">
          <label
            htmlFor="destination-country"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Select Destination Country
          </label>
          <select
            id="destination-country"
            value={selectedDestinationCountry}
            onChange={(e) => setSelectedDestinationCountry(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={`destination-${country}`} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full md:w-1/5">
          <label
            htmlFor="destination-port"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Select Destination Port
          </label>
          <select
            id="destination-port"
            value={destinationPort}
            onChange={(e) => setDestinationPort(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            disabled={!selectedDestinationCountry}
          >
            <option value="">Select Destination Port</option>
            {destinationPorts.map((port) => (
              <option key={`destination-${port.code}`} value={port.code}>
                {port.name} - {port.city}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-[#84d37e] to-[#55b4db] py-3 px-8 w-full md:w-40 rounded-full"
        >
          Search
        </button>
      </form>

      <div className="mx-3">
        <Map
          sourcePort={selectedSourcePortDetails?.coordinates}
          destinationPort={selectedDestinationPortDetails?.coordinates}
          shouldFetchRoute={shouldFetchRoute}
          onRouteFetched={handleRouteFetched}
        />
        {/* <Maps 
          sourcePort={selectedSourcePortDetails?.coordinates}
          destinationPort={selectedDestinationPortDetails?.coordinates}
          shouldFetchRoute={shouldFetchRoute}
          onRouteFetched={handleRouteFetched}
        /> */}
      </div>
    </div>
  );
};

export default DemoPage;
