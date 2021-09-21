// RECAP!

// MAIN THING: ASYNC & SYNC

// MAIN TAKEAWAYS: 

// - Sync goes first, then async after, first to finish gets done first.
// - All callbacks are not async
// - All Async need a callback
// - Not everything is timed (more than just setTimeout)

// USAGE

// - setTimeout, sets a time, then does the callback when that time comes.
// - fs.readFile, starts to read a file, then does the callback when it's done reading
// - fs.writeFile, starts to write a file, then does the callback when it's done writing
// - Event Emitter, when an event is emitted, the listener gets triggered.