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
    title: "Electronic Surveying Device",
    subtitle: "Final-year project — Industry sponsor: Trimble",
    description:
      "Developing embedded firmware for a handheld surveying prototype involving sensing and imaging hardware. Responsible for microcontroller-based device control, peripheral integration, hardware-software debugging, and prototype testing across firmware, electronics, and mechanical constraints.",
    tags: ["C/C++", "Embedded", "Raspberry Pi", "I2C", "SPI", "Linux", "Firmware"],
    featured: true,
    detail: {
      overview:
        "The Trimble Horus project is my final-year BE(Hons) capstone, developed in partnership with Trimble — a global leader in surveying and positioning technology. The goal is to design and build a compact handheld accessory that integrates sensing, imaging, and wireless communications into a single field-deployable device. My role spans the full embedded stack: from low-level peripheral drivers through to system-level integration and prototype validation.",
      highlights: [
        "Firmware development on a Variscite DART-MX8M-Plus (i.MX8M Plus) running Debian Bookworm Linux",
        "Peripheral integration across I2C, SPI, UART, and GPIO — camera, IMU, rangefinder, battery management",
        "Research and evaluation of laser rangefinder modules (Hilti LDM, LightWare SF11/C) against project requirements",
        "Hardware-software debugging using oscilloscope, logic analyser, and serial console",
        "Working within mechanical and electronics constraints to support a prototype intended for field use",
      ],
      challenge:
        "The hardest part was coordinating across three very different domains simultaneously — firmware, electronics, and mechanical — where a decision in one layer directly constrains the others. Getting reliable peripheral communication on a new platform required careful register-level debugging and iterative validation against the hardware datasheet.",
      outcome:
        "An integrated prototype combining the target sensing and imaging hardware, with firmware providing stable peripheral control and device management. The project is ongoing through 2025 with Trimble as the industry sponsor.",
      metrics: [
        { label: "Platform", value: "i.MX8M Plus" },
        { label: "OS", value: "Debian Bookworm" },
        { label: "Interfaces", value: "I2C · SPI · UART" },
        { label: "Status", value: "In Progress" },
      ],
      images: [
        { alt: "System architecture diagram", caption: "High-level hardware architecture" },
        { alt: "Prototype hardware assembly", caption: "Prototype during bench testing" },
      ],
    },
  },
  {
    id: "robocup",
    title: "RoboCup Autonomous Robot",
    subtitle: "1st place — UC RoboCup Competition",
    description:
      "Designed and built a tracked autonomous robot (\"Clanker\") using sensor feedback to detect targets and navigate obstacles. Implemented sensor fusion and autonomous decision-making algorithms on a Teensy 4.0 microcontroller.",
    tags: ["C++", "Teensy 4.0", "Sensor Fusion", "BNO IMU", "VL53L1X", "Robotics"],
    github: "https://github.com/geosaurus98/RoboCup",
    featured: true,
    detail: {
      overview:
        "Clanker is a tracked autonomous robot designed to navigate an obstacle course, detect metal targets using inductive sensors and electromagnets, and collect them reliably. Built for the UC RoboCup Competition, the robot runs entirely on a Teensy 4.0 microcontroller with no remote control — all decisions are made onboard using sensor feedback. The team took first place.",
      highlights: [
        "Tracked drive system for stable navigation over varied terrain",
        "Sensor fusion combining BNO055 IMU (heading), VL53L1X / VL53L0X ToF distance sensors, and ultrasonic sensors",
        "TCS34725 colour sensor for target identification",
        "Autonomous decision-making state machine running on Teensy 4.0 at real-time rates",
        "Iterative tuning and field testing to achieve reliable performance across repeated runs",
      ],
      challenge:
        "Getting robust autonomous behaviour in an uncontrolled physical environment was the core challenge. Sensor noise, inconsistent lighting, and edge cases in the obstacle detection all had to be handled gracefully. The robot couldn't hesitate or get stuck mid-run, so every state transition had to be validated and fallback behaviour defined.",
      outcome:
        "First place at the UC RoboCup Competition. The robot completed all required tasks reliably across multiple competition runs, demonstrating robust sensor fusion and decision-making under real-world conditions.",
      metrics: [
        { label: "Result", value: "1st Place" },
        { label: "MCU", value: "Teensy 4.0" },
        { label: "Clock", value: "600 MHz" },
        { label: "Sensors", value: "5 types" },
      ],
      diagram: {
        title: "Autonomous Decision State Machine",
        nodes: [
          { id: "init",     label: "INIT" },
          { id: "nav",      label: "NAVIGATE" },
          { id: "detect",   label: "DETECT" },
          { id: "approach", label: "APPROACH" },
          { id: "collect",  label: "COLLECT" },
        ],
      },
      video: {
        src: "/projects/robocup/video.mp4",
        caption: "Clanker completing the competition course",
      },
      images: [
        { alt: "Clanker robot on competition track", caption: "Clanker navigating the competition course" },
        { alt: "Electronics and sensor layout", caption: "Teensy 4.0 and sensor array" },
      ],
    },
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
    subtitle: "Nexys-4 DDR / Artix-7",
    description:
      "Developed a reaction-time measurement system in VHDL on FPGA hardware. Designed a finite state machine, timing logic, and 7-segment display interface. Validated sub-millisecond timing resolution across repeated operation.",
    tags: ["VHDL", "FPGA", "Digital Design", "FSM", "Nexys-4"],
    github: "https://github.com/geosaurus98/VHDL-Reaction-Timer",
    detail: {
      overview:
        "A hardware reaction timer implemented entirely in VHDL on the Digilent Nexys-4 DDR board (Artix-7 FPGA). The system presents a randomised visual stimulus using onboard LEDs, measures the time until the user presses a button, and displays the result on the 7-segment display in milliseconds.",
      highlights: [
        "Finite state machine with states: IDLE → WAIT → STIMULUS → MEASURING → DISPLAY",
        "Pseudo-random delay generator for unpredictable stimulus timing",
        "100 MHz clock-based timing logic with sub-millisecond resolution",
        "Multiplexed 7-segment display driver for 4-digit time readout",
        "Debounced button input to prevent false triggers",
      ],
      challenge:
        "Designing the FSM to correctly handle all edge cases — false starts (pressing before the stimulus), held buttons, and display multiplexing timing — while keeping the logic clean and synthesisable. The 7-segment multiplexer also needed careful timing to avoid visible flicker.",
      outcome:
        "Stable operation with sub-millisecond timing resolution, validated across repeated measurements. The system correctly rejects false starts and displays clean results on the 7-segment display.",
      metrics: [
        { label: "Platform", value: "Artix-7" },
        { label: "Clock", value: "100 MHz" },
        { label: "Resolution", value: "<1 ms" },
        { label: "FSM states", value: "5" },
      ],
      diagram: {
        title: "Reaction Timer FSM",
        nodes: [
          { id: "idle",      label: "IDLE" },
          { id: "wait",      label: "WAIT" },
          { id: "stimulus",  label: "STIMULUS" },
          { id: "measuring", label: "MEASURING" },
          { id: "display",   label: "DISPLAY" },
        ],
      },
      images: [
        { alt: "Nexys-4 DDR board running the timer", caption: "Timer running on Nexys-4 DDR" },
      ],
    },
  },
  {
    id: "plc-elevator",
    title: "PLC Elevator Control System",
    description:
      "Programmed elevator logic using Ladder Logic and Structured Text on a real PLC platform. Implemented call prioritisation, floor tracking, and safety interlocks. Validated across all edge cases and fault conditions.",
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
        "Exhaustively handling edge cases in the call scheduling logic: simultaneous up/down calls at the same floor, calls arriving while the elevator is in motion, and power-up initialisation to a known state. Every path through the logic had to be validated independently.",
      outcome:
        "Fully functional elevator system validated across all specified edge cases and fault conditions, including door obstruction, simultaneous floor calls, and power-up behaviour.",
      metrics: [
        { label: "Languages", value: "LL + ST" },
        { label: "Platform", value: "Real PLC" },
        { label: "Edge cases", value: "All validated" },
        { label: "Interlocks", value: "Safety-rated" },
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
    subtitle: "Multiple strategies + benchmarking",
    description:
      "Advanced Python tool for solving Wordle puzzles with multiple solver modes and benchmarking. Analyses optimal opening words and compares algorithm performance across the full word set.",
    tags: ["Python", "Algorithms"],
    github: "https://github.com/geosaurus98/Wordle-Solver",
    detail: {
      overview:
        "A Python Wordle solver that implements multiple solving strategies and a benchmarking framework to compare their performance across the full Wordle word list. The tool supports interactive play mode, auto-solve mode, and batch benchmarking.",
      highlights: [
        "Multiple solver strategies: frequency-based, minimax, and entropy-based",
        "Benchmarking mode runs the solver against the entire word list and reports average solve depth",
        "Analysis of optimal opening words by expected information gain",
        "Interactive mode for assisted manual play",
        "Clean CLI interface with configurable options",
      ],
      challenge:
        "The entropy-based strategy requires calculating expected information gain across all remaining candidates for every possible guess, which is computationally expensive. Optimising this to run in reasonable time while maintaining accuracy required careful implementation of the filtering and scoring logic.",
      outcome:
        "Consistent sub-4-turn average solve rate with the entropy strategy. The benchmarking framework clearly shows the performance gap between strategies and validates the optimal opening word choices.",
      metrics: [
        { label: "Avg solve", value: "~3.7 turns" },
        { label: "Word list", value: "12,971 words" },
        { label: "Strategies", value: "3 modes" },
        { label: "Language", value: "Python" },
      ],
      images: [
        { alt: "Solver benchmark output", caption: "Strategy comparison benchmark results" },
        { alt: "Interactive solve session", caption: "Assisted solve in interactive mode" },
      ],
    },
  },
  {
    id: "battleship",
    title: "Battleship (UCFK4)",
    subtitle: "UC Fun Kit 4 — embedded C game",
    description:
      "Two-player Battleship game built in C for the UC Fun Kit 4 microcontroller. Features LED matrix display, serial communication between two boards, and full game logic including ship placement and hit detection.",
    tags: ["C", "Embedded", "UCFK4", "Serial Comms"],
    github: "https://github.com/geosaurus98/battleship-UCFK4",
    detail: {
      overview:
        "A fully playable two-player Battleship game running on the UC Fun Kit 4 (UCFK4) microcontroller platform. Both players use separate boards connected via serial UART. The LED matrix serves as the display, with navswitch-based input for ship placement and target selection.",
      highlights: [
        "Two-board multiplayer via UART serial communication",
        "5×5 LED matrix display for grid, ships, and hit/miss markers",
        "Navswitch input for ship placement and attack targeting",
        "Game state synchronisation between boards over serial",
        "Clean state machine: PLACE_SHIPS → PLAYER_TURN → OPPONENT_TURN → GAME_OVER",
      ],
      challenge:
        "Keeping the two boards synchronised over serial without a dedicated handshake protocol required careful framing of messages and timeout handling. The LED matrix also had very limited display resolution, so the UI had to communicate game state clearly within a 5×5 grid.",
      outcome:
        "Fully playable two-player game demonstrated on real hardware. Ship placement, attacks, hit/miss feedback, and win detection all work correctly across both boards.",
      metrics: [
        { label: "Players", value: "2-player" },
        { label: "Display", value: "5×5 LED" },
        { label: "Comms", value: "UART serial" },
        { label: "Language", value: "C" },
      ],
      diagram: {
        title: "Game State Machine",
        nodes: [
          { id: "place",    label: "PLACE SHIPS" },
          { id: "pturn",    label: "MY TURN" },
          { id: "wait",     label: "WAIT ACK" },
          { id: "oturn",    label: "THEIR TURN" },
          { id: "over",     label: "GAME OVER" },
        ],
      },
      images: [
        { alt: "Two UCFK4 boards playing Battleship", caption: "Two boards connected for multiplayer" },
        { alt: "LED matrix game display", caption: "5×5 grid during active game" },
      ],
    },
  },
];
