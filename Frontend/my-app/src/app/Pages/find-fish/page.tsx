"use client"
import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Component() {
  const [location, setLocation] = React.useState('');
  const [fishSpecies, setFishSpecies] = React.useState('');
  const [nearestPlaces, setNearestPlaces] = React.useState([]);
  const [error, setError] = React.useState('');
  const [prediction, setPrediction] = React.useState('');

  const handleTextSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          location,
          fish_species: fishSpecies
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        setNearestPlaces(data.nearest_places);
      }
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
      setError('There was a problem with your request. Please try again later.');
    }
  };

  const handleImageSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch('/predict', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      if (data.error) {
        setError(data.error);
        setPrediction('');
      } else {
        setPrediction(data.message);
        setError('');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('There was a problem with your request. Please try again later.');
      setPrediction('');
    }
  };

  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <header className="flex items-center h-14 px-4 border-b sm:h-16 lg:px-6">
        <div className="flex items-center space-x-4">
          <MountainIcon className="w-8 h-8 " />
          <span className="text-lg font-semibold">Auto-Fis</span>
        </div>
      </header>
      <main className="flex-1 grid items-center justify-center gap-4 p-4 text-center md:gap-8 lg:gap-12">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Find Fish</h1>
          <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            Enter your location and the type of fish you want to find.
          </p>
        </div>
        <form onSubmit={handleTextSubmit} className="flex w-full max-w-sm flex-col gap-2 mx-auto">
          <Input placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
          <Input placeholder="Type of Fish" value={fishSpecies} onChange={(e) => setFishSpecies(e.target.value)} />
          <Button className="w-full" type="submit">Submit Text</Button>
        </form>
        {error && <p className="text-red-500">{error}</p>}
        {nearestPlaces.length > 0 && (
          <div>
            <h2>Nearest Places:</h2>
            <ul>
              {nearestPlaces.map((place, index) => (
                <li key={index}>{place[0]} - Distance: {place[1]} km</li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}

interface MountainIconProps extends React.SVGProps<SVGSVGElement> {}

function MountainIcon(props: MountainIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
