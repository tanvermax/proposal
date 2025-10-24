import React from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

interface ConditionFormProps {
  conditionText: string;
  onConditionTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
}

const ConditionForm: React.FC<ConditionFormProps> = ({
  conditionText,
  onConditionTextChange,
  onSubmit,
}) => (
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
        onClick={onSubmit}
        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md"
      >
        Submit Condition 💙
      </Button>
    </CardContent>
  </Card>
);

export default ConditionForm;
