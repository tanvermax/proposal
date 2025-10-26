import React from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

interface ConditionFormProps {
  conditionText: string;
  onConditionTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void; // can be used for parent state update if needed
}

const ConditionForm: React.FC<ConditionFormProps> = ({
  conditionText,
  onConditionTextChange,
  onSubmit,
}) => {
  // 🔹 Helper to fetch location name from coordinates
  const getLocationName = async (lat: number, lon: number) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
      );
      const data = await response.json();
      return data.display_name || 'Unknown location';
    } catch (error) {
      console.error('Error fetching location:', error);
      return 'Unknown location';
    }
  };

  // 🔹 Handle form submit
  const handleSubmit = async () => {
    try {
      // Step 1: Get device info
      const deviceInfo = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
      };

      // Step 2: Get user geolocation
      let location = 'Location not available';
      if ('geolocation' in navigator) {
        await new Promise<void>((resolve) => {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;
              location = await getLocationName(latitude, longitude);
              resolve();
            },
            (error) => {
              console.warn('Geolocation permission denied or unavailable:', error);
              resolve();
            }
          );
        });
      }

      // Step 3: Send POST request
      const response = await axios.post(
        'https://trusty-hands-backend.vercel.app/api/condition-response',
        {
          condition: conditionText,
          timestamp: new Date().toISOString(),
          deviceInfo,
          location,
        },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      console.log('✅ Server response:', response.data);
      // alert('💙 Condition submitted with your device and location info!');
      onSubmit(); // optional callback
    } catch (error) {
      console.error('❌ POST failed:', error);
      // alert('Something went wrong. Please try again.');
    }
  };

  return (
    <Card className="w-full max-w-md mt-8 shadow-2xl bg-gradient-to-br from-pink-50 to-rose-100 backdrop-blur-lg">
      <CardContent className="p-6">
        <p className="mb-4 text-gray-700 text-center font-medium">
          Write your lovely condition below 💌
        </p>
        <Textarea
          value={conditionText}
          onChange={onConditionTextChange}
          placeholder="E.g., 'Only if you promise me bubble tea dates forever 🧋'"
          rows={4}
          className="resize-none text-sm sm:text-base rounded-lg"
        />
        <Button
          onClick={handleSubmit}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md"
        >
          Submit Condition 💙
        </Button>
      </CardContent>
    </Card>
  );
};

export default ConditionForm;
