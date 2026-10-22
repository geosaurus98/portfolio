import type { StateDiagramData } from "@/components/StateDiagram";

export type Metric = { label: string; value: string };

export type Project = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  github?: string;
  featured?: boolean;
  detail?: ProjectDetail;
};

export type ProjectDetail = {
  overview: string;
  contribution?: string;
  highlights: string[];
  challenge: string;
  outcome: string;
  metrics?: Metric[];
  diagram?: StateDiagramData;
  video?: { src: string; caption?: string };
  images?: { alt: string; caption?: string }[];
};

export const projects: Project[] = [
  {
    id: "trimble-surveying",
    title: "Horus — Embedded Linux Surveying Accessory",
    subtitle: "2026 final-year project · Industry sponsor: Trimble",
    description: "A C userspace daemon for a surveying accessory on an i.MX 8M Plus platform, coordinating sensing, wireless communication, and camera streaming. The project combined firmware architecture with hardware integration and bench debugging.",
    tags: [
      "C",
      "Embedded Linux",
      "Yocto",
      "UART",
      "SPI",
      "Bluetooth",
      "GStreamer"
    ],
    detail: {
      overview: "Horus is a University of Canterbury team capstone supported by Trimble. The accessory brings together a laser rangefinder, IMU, camera, and a tablet connection on a custom carrier board with a Variscite DART-MX8M-PLUS system-on-module. The production platform runs Yocto Scarthgap Linux; Debian Bookworm was used during development.",
      highlights: [
        "Rebuilt an existing Python implementation as a modular C userspace daemon managed by systemd.",
        "Used Linux interfaces including termios for UART, spidev for SPI, and libgpiod for GPIO.",
        "Developed rangefinder communication, IMU orientation handling, Bluetooth JSON streaming, and a WebSocket tablet link.",
        "Integrated GStreamer camera-streaming support and board-specific configuration.",
        "Used regression tests and bench measurements to investigate communication and integration faults."
      ],
      challenge: "Integration depended on both firmware and a custom PCB. Power-rail faults prevented the camera, laser, and IMU from operating together on the final board, so software development and subsystem checks had to be kept separate from claims about complete system performance.",
      outcome: "Delivered the C firmware architecture and integration work for the prototype. Hardware faults limited final-board validation: full sensing and imaging operation and the eight-hour runtime target were not demonstrated. The handover records those limits alongside the implementation.",
      metrics: [
        {
          label: "Platform",
          value: "i.MX 8M Plus"
        },
        {
          label: "Target OS",
          value: "Yocto Scarthgap"
        },
        {
          label: "Runtime",
          value: "Linux + systemd"
        },
        {
          label: "Validation",
          value: "Partial integration"
        }
      ],
      contribution: "My work focused on laser rangefinder evaluation, firmware architecture, the Python-to-C rebuild, peripheral communication, and hardware–software debugging. The carrier PCB and mechanical assembly were team workstreams."
    },
    featured: true
  },
  {
    id: "robocup",
    title: "RoboCup Autonomous Robot",
    subtitle: "1st place · UC RoboCup Competition · Team project",
    description: "Teensy 4.0 firmware for an autonomous collection robot: navigate obstacles, identify metal objects, sort them, and return to base using sensor feedback and layered state machines.",
    tags: [
      "C++",
      "Teensy 4.0",
      "PID Control",
      "State Machines",
      "Sensor Integration"
    ],
    detail: {
      overview: "Clanker is a tracked autonomous robot built for the UC RoboCup Competition. A Teensy 4.0 coordinates navigation, object collection, sorting, and return-to-base behaviour. Distance sensors locate obstacles and candidate objects; an inductive sensor classifies metal, and a colour sensor identifies the bases.",
      highlights: [
        "Separated high-level goals, detection states, and drive commands into layered state machines.",
        "Used BNO055 IMU heading feedback and PID correction for navigation.",
        "Combined time-of-flight, ultrasonic, inductive, and colour sensing for distinct tasks.",
        "Coordinated motor outputs, servo sorting arms, and a deposit gate with non-blocking scheduled tasks.",
        "Added IMU-based stuck detection, escape behaviour, and Bluetooth parameter tuning."
      ],
      challenge: "Navigation, sensing, and sorting needed to run together without long blocking operations. Breaking the behaviour into scheduled modules made it possible to handle obstacles and collection sequences while keeping control updates responsive.",
      outcome: "The team placed first at the UC RoboCup Competition. The firmware coordinates autonomous navigation, metal classification, sorting, and homing on one microcontroller. The repository documents the module structure, task intervals, hardware interfaces, and runtime tuning commands.",
      metrics: [
        {
          label: "MCU",
          value: "Teensy 4.0"
        },
        {
          label: "Control",
          value: "IMU + PID"
        },
        {
          label: "Scheduling",
          value: "Cooperative"
        },
        {
          label: "Language",
          value: "C++"
        }
      ]
    },
    github: "https://github.com/geosaurus98/RoboCup",
    featured: true
  },
  {
    id: "robotic-arm",
    title: "Arduino Robotic Arm",
    subtitle: "4-DOF with Bluetooth control",
    description:
      "Designed and built a 4-DOF robotic arm with Bluetooth smartphone control via HC-05. Implemented inverse kinematics for precise end-effector positioning and demonstrated pick-and-place operation.",
    tags: ["C++", "Arduino", "Bluetooth", "Inverse Kinematics", "Robotics"],
    detail: {
      overview:
        "A four-degree-of-freedom robotic arm built around an Arduino, with full Bluetooth control via an HC-05 module and a custom smartphone interface. The arm implements inverse kinematics to convert desired end-effector positions into joint angles, allowing intuitive control rather than direct servo commanding.",
      highlights: [
        "4-DOF arm: shoulder rotation, shoulder pitch, elbow, and wrist/gripper",
        "HC-05 Bluetooth module with custom serial command protocol",
        "Inverse kinematics solving for end-effector XYZ position",
        "Servo interpolation for smooth, controlled motion",
        "Demonstrated pick-and-place of small objects",
      ],
      challenge:
        "Implementing inverse kinematics that correctly accounts for physical servo limits and avoids singularities. Joint angle solutions also needed to be mapped to real servo PWM values with calibration offsets, which required careful measurement and iterative adjustment.",
      outcome:
        "Fully functional pick-and-place arm with smooth Bluetooth-controlled motion. End-effector positioning accuracy was sufficient for reliable object manipulation within the arm's workspace.",
      metrics: [
        { label: "DOF", value: "4-DOF" },
        { label: "MCU", value: "Arduino" },
        { label: "Control", value: "Bluetooth" },
        { label: "IK method", value: "Analytical" },
      ],
      images: [
        { alt: "Robotic arm full assembly", caption: "Completed 4-DOF arm" },
        { alt: "Arm performing pick-and-place", caption: "Pick-and-place demonstration" },
      ],
    },
  },
  {
    id: "vhdl-reaction-timer",
    title: "FPGA Reaction Timer",
    subtitle: "Team project · ENEL373 · Nexys-4 DDR",
    description: "A VHDL reaction timer with millisecond timing, randomised visual prompts, early-input detection, and minimum, maximum, and average results on a multiplexed seven-segment display.",
    tags: [
      "VHDL",
      "FPGA",
      "Vivado",
      "Simulation",
      "Digital Design"
    ],
    detail: {
      overview: "This team project implements a reaction timer on the Nexys-4 DDR board with an Artix-7 FPGA. Decimal-point prompts turn off at random intervals; the final prompt starts the measurement, and a button press stops it. Results are displayed in milliseconds, with statistics over recent measurements.",
      highlights: [
        "Connected timing, control, pseudo-random delay, statistics, and display modules in a structural VHDL design.",
        "Used a parameterised LFSR to vary the delay between visual prompts.",
        "Computed minimum, maximum, and average values from the last three stored results.",
        "Converted binary values to BCD and multiplexed the onboard seven-segment display.",
        "Included module testbenches for binary-to-BCD conversion, multiplexing, decoding, and clock division."
      ],
      challenge: "The design needed to coordinate prompts, timing, early button presses, and result display in synchronous logic. Separate modules and simulation testbenches made the data conversions and timing behaviour easier to inspect.",
      outcome: "Implemented the reaction timer and statistics functions in synthesisable VHDL. The repository provides the source modules, testbenches, and Vivado simulation instructions; timing is reported at millisecond resolution.",
      metrics: [
        {
          label: "Platform",
          value: "Artix-7"
        },
        {
          label: "Board clock",
          value: "100 MHz"
        },
        {
          label: "Resolution",
          value: "1 ms"
        },
        {
          label: "Statistics",
          value: "Last 3 results"
        }
      ]
    },
    github: "https://github.com/geosaurus98/VHDL-Reaction-Timer"
  },
  {
    id: "plc-elevator",
    title: "PLC Elevator Control System",
    description:
      "Programmed elevator logic using Ladder Logic and Structured Text on a real PLC platform. Implemented call prioritisation, floor tracking, and door interlocks.",
    tags: ["PLC", "Ladder Logic", "Structured Text", "Control Systems"],
    detail: {
      overview:
        "A complete elevator control system programmed on a real PLC, using both Ladder Logic and Structured Text. The system handles multi-floor call requests, prioritises travel direction, controls door open/close timing, tracks current floor, and enforces safety interlocks throughout.",
      highlights: [
        "Multi-floor call queue with direction-priority scheduling",
        "Floor tracking using discrete position sensors",
        "Door control with open/close timing and obstruction interlock",
        "Safety interlocks preventing movement with door open",
        "Manual override mode for maintenance",
      ],
      challenge:
        "Call scheduling needs to account for simultaneous up/down requests, new calls while the elevator is moving, and power-up initialisation to a known state. These scenarios make transition logic and interlock behaviour central to the design.",
      outcome:
        "Implemented elevator call scheduling, floor tracking, and door interlock logic. Relevant validation scenarios include door obstruction, simultaneous calls, and power-up behaviour.",
      metrics: [
        { label: "Languages", value: "LL + ST" },
        { label: "Platform", value: "Real PLC" },
        { label: "Scheduling", value: "Direction priority" },
        { label: "Interlocks", value: "Door logic" },
      ],
      diagram: {
        title: "Elevator Control State Machine",
        nodes: [
          { id: "idle",     label: "IDLE" },
          { id: "up",       label: "MOVING UP" },
          { id: "down",     label: "MOVING DOWN" },
          { id: "door",     label: "DOOR OPEN" },
          { id: "close",    label: "DOOR CLOSE" },
        ],
      },
      images: [
        { alt: "PLC wiring and I/O configuration", caption: "PLC hardware setup" },
        { alt: "Ladder Logic program excerpt", caption: "Call prioritisation logic" },
      ],
    },
  },
  {
    id: "wordle-solver",
    title: "Wordle Solver",
    subtitle: "Python · Frequency scoring and benchmarking",
    description: "A Python tool for single and multiple Wordle puzzles, combining letter-frequency scoring, feedback-based candidate filtering, and batch benchmarks with visual analysis.",
    tags: [
      "Python",
      "Algorithms",
      "NumPy",
      "pandas",
      "Matplotlib"
    ],
    detail: {
      overview: "The solver ranks guesses using letter-frequency analysis and reduces the candidate set after each round of green, yellow, and grey feedback. It supports multiple puzzles with shared guesses, sequential solving, and automated testing across a word list.",
      highlights: [
        "Separated word loading, scoring, filtering, user interaction, and solver modes into modules.",
        "Supported both multi-word solving and sequential solving with adaptive feedback.",
        "Allowed configurable opening-word sets and custom guesses.",
        "Benchmarked solved counts and average guesses for different opening configurations.",
        "Generated letter-frequency heatmaps with Matplotlib and Seaborn."
      ],
      challenge: "Each round of feedback must narrow the candidates consistently while keeping scoring separate from interaction. Batch testing makes changes to filtering and opening words easier to compare than a handful of manual games.",
      outcome: "Delivered an interactive solver and a repeatable benchmarking workflow. Results can be compared by opening configuration using solved counts and average guesses, rather than assuming that a single example represents overall performance.",
      metrics: [
        {
          label: "Scoring",
          value: "Letter frequency"
        },
        {
          label: "Modes",
          value: "Multi / sequence / test"
        },
        {
          label: "Interface",
          value: "CLI"
        },
        {
          label: "Analysis",
          value: "Benchmarks + heatmaps"
        }
      ]
    },
    github: "https://github.com/geosaurus98/Wordle-Solver"
  },
  {
    id: "battleship",
    title: "Battleship (UCFK4)",
    subtitle: "Team project · UC Fun Kit 4",
    description: "A two-player embedded C game for two UC Fun Kit 4 boards, using infrared communication, navswitch controls, and a 5×7 LED matrix for ship placement and turn-based play.",
    tags: [
      "C",
      "Embedded",
      "UCFK4",
      "Infrared",
      "Game Logic"
    ],
    detail: {
      overview: "Two UC Fun Kit 4 boards communicate over infrared to run a Battleship game. Each player places three ships on a 5×7 grid, then selects attack coordinates with the navswitch. LED patterns and text communicate hits, misses, and the final result.",
      highlights: [
        "Used infrared communication between the two aligned boards.",
        "Provided navswitch navigation, ship rotation, and placement confirmation.",
        "Handled three ships of lengths two, three, and four cells with no overlapping placement.",
        "Displayed hit and miss feedback within the limited LED matrix interface.",
        "Coordinated alternating turns and notified the other board when the game ended."
      ],
      challenge: "The game needed to communicate placement, targeting, and results through very limited controls and display space. The two boards also had to exchange moves and maintain a consistent turn sequence over infrared.",
      outcome: "Implemented the game workflow from ship placement through attacks and win/loss feedback. The repository includes setup instructions and the controls for running a two-board game.",
      metrics: [
        {
          label: "Players",
          value: "2 boards"
        },
        {
          label: "Display",
          value: "5×7 LED"
        },
        {
          label: "Link",
          value: "Infrared"
        },
        {
          label: "Language",
          value: "C"
        }
      ]
    },
    github: "https://github.com/geosaurus98/battleship-UCFK4"
  },
  {
    id: "step-counter",
    title: "STM32 Step Counter",
    subtitle: "Team project · ENCE361 · STM32C071",
    description: "Modular C firmware for accelerometer-based step detection, distance estimates, configurable goals, and an OLED interface, coordinated by a cooperative task scheduler.",
    tags: [
      "C",
      "STM32",
      "Signal Filtering",
      "State Machines",
      "Runtime Profiling"
    ],
    detail: {
      overview: "Built for ENCE361, this step counter uses an STM32C071 Nucleo board and a custom expansion module. It filters accelerometer readings, detects steps from the acceleration magnitude, and presents step count, distance, and goal progress on an OLED display.",
      highlights: [
        "Separated accelerometer processing, step detection, goal tracking, display, and input handling into modules.",
        "Used HAL_GetTick() to schedule periodic tasks without an RTOS.",
        "Applied filtering and threshold-based detection to the accelerometer magnitude.",
        "Added joystick navigation, potentiometer goal setting, LED progress, and buzzer feedback.",
        "Provided serial telemetry, a controllable test mode, and task-runtime profiling."
      ],
      challenge: "Fixed thresholds did not generalise equally across all walking styles: testing found undercounting for some users. The test mode supports checking UI and goal logic, while live accelerometer telemetry helps investigate detection behaviour separately.",
      outcome: "Implemented step and distance displays, goal setting, and progress feedback with modular scheduled firmware. Profiling documented task execution costs. Adaptive thresholds and broader user testing remain useful next steps for improving detection consistency.",
      metrics: [
        {
          label: "MCU",
          value: "STM32C071"
        },
        {
          label: "Language",
          value: "C"
        },
        {
          label: "Scheduling",
          value: "Cooperative"
        },
        {
          label: "Interface",
          value: "OLED + joystick"
        }
      ]
    },
    github: "https://github.com/geosaurus98/Step-Counter",
    featured: true
  },
];
