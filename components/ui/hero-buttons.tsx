"use client";

export function ResumeButton() {
  return (
    <button
      onClick={() => window.open("/My_Resume.pdf", "_blank")}
      className="glass-button px-4 py-2 rounded-lg text-foreground text-sm font-medium inter-font cursor-pointer"
    >
      Resume
    </button>
  );
}

export function ViewWorkButton() {
  return (
    <button
      onClick={() =>
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
      }
      className="primary-button px-6 py-3 text-foreground rounded-lg font-medium text-sm min-w-[160px] cursor-pointer"
    >
      View My Work
    </button>
  );
}

export function GetInTouchButton() {
  return (
    <button
      onClick={() =>
        document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" })
      }
      className="glass-button min-w-[160px] inter-font text-sm font-medium text-foreground rounded-lg px-6 py-3 cursor-pointer"
    >
      Get In Touch
    </button>
  );
}
