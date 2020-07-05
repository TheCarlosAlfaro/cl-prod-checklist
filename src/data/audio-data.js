export const audioData = [
  {
    taskNumber: 0,
    taskTime: "4:00",
    taskDescription: "Arrive! Power on all breakers and audio equipment.",
    taskSteps: [
      "All Breakers in the green room",
      "Stage left Audio Rack",
      "Drummer's subwoofer",
      "Stage wedge",
      "Console",
      "FOH rack 1 and rack 2",
      "Breaker for Main PA",
      "Tracking Laptop",
      "iPod for walk-in music (Make sure it's connected to power)",
      "Lobby Speaker",
      "Broadcast Mixing computer (Fader Port, UAD interface)",
    ],
    isChecked: false,
  },
  {
    taskNumber: 1,
    taskTime: "4:15",
    taskDescription: "Prep Mics and IEM's, lay them out on stage for VOX.",
    taskSteps: [
      "Check/replace batteries",
      "Test to make sure there is signal for FOH, Recording, and Broadcast.",
      "Clean and disinfect all devices with wipes (Don't forget pastor Jabin's mics)",
      "Lay out all mics and in ear packs on stage in an orderly fashion and label with names accordingly.",
    ],
    isChecked: false,
  },

  {
    taskNumber: 2,
    taskTime: "4:30",
    taskDescription:
      "Setup recording session on both tracking and broadcast computers",
    taskSteps: [
      "Open, and start DVS (Dante Virtual Soundcard)",
      "Open Logic/Tracks and create a new session base off of our current templates.",
      '"Save as" follow our naming convention ("M/D/Y_[keyword]" e.g. "June-24-2020_changes patching")',
      '"ARM" all tracks for recording (Make sure you are getting signal on every channel)',
    ],
    isChecked: false,
  },
  {
    taskNumber: 3,
    taskTime: "4:45",
    taskDescription: "Patch/Check lines for band",
    taskSteps: [
      "Make sure you are getting signal from every input to FOH, Recording, and Broadcast",
      "Check for healthy Gain structure (Prevent inputs from clipping at all cost)",
      "Make EQ/Comp adjustments if needed",
      "Check Tracks levels (Ableton machine)",
    ],
    isChecked: false,
  },
  {
    taskNumber: 4,
    taskTime: "5:00",
    taskDescription:
      "Band will be running transitions. Be on standby to make monitor adjustments.",
    taskSteps: ["Make IEM mix changes as requested by musicians"],
    isChecked: false,
  },
  {
    taskNumber: 5,
    taskTime: "5:30",
    taskDescription:
      "Vocalists will arrive from warm ups. Full Rehearsal Start! Use this time to dial in mix.",
    taskSteps: [
      "Double check Gain levels for Vox mics (We don't want to be clipping)",
      "Make EQ/Comp adjustments for Vox if needed",
      "Record rehearsals on both recording and broadcast machines",
      "Dial in FOH, and Broadcast mix",
    ],
    isChecked: false,
  },
  {
    taskNumber: 6,
    taskTime: "6:40",
    taskDescription:
      "Team Huddle. Attendance required, unless there is an emergency with audio that cant wait. If so communicate with Brandon.",
    taskSteps: [],
    isChecked: false,
  },
  {
    taskNumber: 7,
    taskTime: "6:50",
    taskDescription: "Doors open. Turn on BGM in lobby and house.",
    taskSteps: [],
    isChecked: false,
  },
  {
    taskNumber: 8,
    taskTime: "7:00",
    taskDescription: "Run Service.",
    taskSteps: [
      "Hit RECORD on recording and broadcast machines",
      "Turn down HOUSE lights from video intro to praise and worship",
      "Turn ON HOUSE lights at the end of the praise and worship time",
      "Pay attention for pastor's mic transition between the handheld and headset",
      "MUTE DCA faders from inputs not being use during the message (e.g. drums, bass, guitars) to prevent any distractions",
    ],
    isChecked: false,
  },
  {
    taskNumber: 9,
    taskTime: "8:30",
    taskDescription: "Service End",
    taskSteps: [
      "Let BGM run while people are mingling",
      "STOP recordings, and save Logic/Tracks session",
      "Transfer multitrack files to external hard-drive",
      "When lobby starts to clear out, start shutdown procedures. (turn off audio equipment and audio breakers) Follow the first checklist item in reverse order.",
    ],
    isChecked: false,
  },
  {
    taskNumber: 10,
    taskTime: "8:30",
    taskDescription: "Clean and organize work station.",
    taskSteps: [],
    isChecked: false,
  },
]
