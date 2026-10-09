var STORAGE_KEY = "workDay";
var START_HOUR = 8; // 8 AM
var END_HOUR = 17; // 5 PM

var timeBlocksEl = document.getElementById("time-blocks");
var currentDayEl = document.getElementById("current-day");
var clearButton = document.getElementById("clear-schedule");

// "8 AM", "12 PM", "5 PM", ...
function hourLabel(hour) {
  var suffix = hour < 12 ? "AM" : "PM";
  var displayHour = hour % 12 === 0 ? 12 : hour % 12;
  return displayHour + " " + suffix;
}

function loadSchedule() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function saveEvent(label, text) {
  var schedule = loadSchedule();
  schedule[label] = text;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(schedule));
}

function buildTimeBlocks() {
  var schedule = loadSchedule();

  for (var hour = START_HOUR; hour <= END_HOUR; hour++) {
    var label = hourLabel(hour);
    var inputId = "event-" + hour;

    var row = document.createElement("div");
    row.className = "row time-block";
    row.dataset.hour = hour;

    var time = document.createElement("label");
    time.className = "col-2 col-md-1 hour";
    time.htmlFor = inputId;
    time.textContent = label;

    var textarea = document.createElement("textarea");
    textarea.className = "col-8 col-md-10 description";
    textarea.id = inputId;
    textarea.rows = 3;
    textarea.value = schedule[label] || "";

    var button = document.createElement("button");
    button.type = "button";
    button.className = "col-2 col-md-1 save-btn";
    button.setAttribute("aria-label", "Save " + label + " event");
    button.innerHTML = '<i class="fas fa-save" aria-hidden="true"></i>';
    button.addEventListener("click", handleSave.bind(null, label, textarea, button));

    row.appendChild(time);
    row.appendChild(textarea);
    row.appendChild(button);
    timeBlocksEl.appendChild(row);
  }
}

function handleSave(label, textarea, button) {
  saveEvent(label, textarea.value.trim());
  button.classList.add("saved");
  button.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i>';
  setTimeout(function () {
    button.classList.remove("saved");
    button.innerHTML = '<i class="fas fa-save" aria-hidden="true"></i>';
  }, 1200);
}

// Color each block as past, present or future based on the current hour
function updateBlockColors() {
  var currentHour = new Date().getHours();
  var blocks = timeBlocksEl.querySelectorAll(".time-block");
  blocks.forEach(function (block) {
    var hour = Number(block.dataset.hour);
    block.classList.toggle("past", hour < currentHour);
    block.classList.toggle("present", hour === currentHour);
    block.classList.toggle("future", hour > currentHour);
  });
}

function updateClock() {
  var now = new Date();
  currentDayEl.textContent =
    now.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric", year: "numeric" }) +
    " · " +
    now.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
  updateBlockColors();
}

clearButton.addEventListener("click", function () {
  if (!confirm("Clear every event from today's schedule?")) return;
  localStorage.removeItem(STORAGE_KEY);
  timeBlocksEl.querySelectorAll("textarea").forEach(function (textarea) {
    textarea.value = "";
  });
});

buildTimeBlocks();
updateClock();
setInterval(updateClock, 30 * 1000);
