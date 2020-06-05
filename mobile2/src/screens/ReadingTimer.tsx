import React, { useState, useCallback } from "react";
import { View, Platform } from "react-native";
import { Button, Paragraph } from "react-native-paper";
import { styles } from "../constants";
import { StackNavigationProp } from "@react-navigation/stack";
import DateTimePicker from "@react-native-community/datetimepicker";
import { RootStackParamList } from "./NavigatorModal";

type ChoosingViewProps = {
  onStartSelected: (chosenDate: Date) => void;
};

const ChoosingView: React.FC<ChoosingViewProps> = ({ onStartSelected }) => {
  const [endDate, setEndDate] = useState(
    new Date(new Date().getTime() + 5 * 60 * 1000) // Default to 5 min from now
  );
  const [isPickerShown, setIsPickerShown] = useState(false);

  const onChange = useCallback(
    (_event: Event, selectedDate?: Date) => {
      const currentDate = selectedDate || endDate;
      setIsPickerShown(Platform.OS === "ios");
      setEndDate(currentDate);
    },
    [endDate, setIsPickerShown, setEndDate]
  );

  const showPicker = useCallback(() => {
    setIsPickerShown(true);
  }, [setIsPickerShown]);

  const startReading = useCallback(() => {
    onStartSelected(endDate);
  }, [onStartSelected, endDate]);

  return (
    <>
      <Button mode="contained" onPress={startReading} accessibilityStates={[]}>
        {`Start reading until ${endDate.toLocaleString()}`}
      </Button>

      <Button onPress={showPicker} accessibilityStates={[]}>
        Change time
      </Button>

      {isPickerShown && (
        <DateTimePicker
          testID="dateTimePicker"
          value={endDate}
          mode="time"
          is24Hour={true}
          display="clock"
          onChange={onChange}
        />
      )}
    </>
  );
};

type ReadingViewProps = {
  endDate: Date;
  onReadEnd: () => void;
};

const ReadingView: React.FC<ReadingViewProps> = ({ endDate, onReadEnd }) => {
  // TODO: Compute time remaining
  // TODO: Display a countdown
  // TODO: Automatically end when time is up

  const handleStopReading = useCallback(() => {
    // TODO: Stop timer
    onReadEnd();
  }, [onReadEnd]);

  return (
    <>
      <Button
        mode="outlined"
        onPress={handleStopReading}
        accessibilityStates={[]}
      >
        Stop reading
      </Button>
    </>
  );
};

enum Mode {
  CHOOSING,
  READING,
}

type ReadingTimerScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ReadingTimer"
>;

type Props = {
  navigation: ReadingTimerScreenNavigationProp;
};

const ReadingTimer: React.FC<Props> = () => {
  const [endDate, setEndDate] = useState<Date>();
  const [mode, setMode] = useState(Mode.CHOOSING);

  const handleStartSelected = useCallback(
    (selectedEndDate: Date) => {
      setEndDate(selectedEndDate);
      setMode(Mode.READING);
      // TODO: Lock device
    },
    [setMode]
  );

  const handleReadEnd = useCallback(() => {
    // TODO: Unlock device
    setMode(Mode.CHOOSING);
    setEndDate(undefined);
  }, [setMode]);

  return (
    <View style={styles.MainContainer}>
      {mode === Mode.CHOOSING ? (
        <ChoosingView onStartSelected={handleStartSelected} />
      ) : (
        <ReadingView endDate={endDate!} onReadEnd={handleReadEnd} />
      )}
    </View>
  );
};

export default ReadingTimer;
