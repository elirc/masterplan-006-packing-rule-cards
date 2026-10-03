# Hints and answer directions

[Return to the stories](05-PRACTICE-STORIES.md)

There are intentionally no complete feature patches here. Use one hint, return to your code and produce evidence. Your design can differ from the reference when you state and verify the new contract.

## Story 01: Explain the chosen band

**Hint 1 — ownership:** Begin from `recommendPacking`. Add a reason string derived from the branch that selected the band.

**Hint 2 — reasoning:** Revisit the decision “Validate at both the UI and core boundary”. Ask yourself: Explain why Number("") would hide a missing input.

**Answer direction:** A defensible solution demonstrates this observable result: Boundary examples and displayed explanations agree. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 02: Add a reset action

**Hint 1 — ownership:** Begin from `recommendPacking`. Add a button that restores the example inputs and clears previous output.

**Hint 2 — reasoning:** Revisit the decision “Choose an else-if partition”. Ask yourself: Explain why several independent temperature if statements could add contradictory items.

**Answer direction:** A defensible solution demonstrates this observable result: Reset does not submit the form or call the core unexpectedly. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 03: Support one new weather value

**Hint 1 — ownership:** Begin from `recommendPacking`. Choose a fourth fictional condition and extend validation, rule and UI together.

**Hint 2 — reasoning:** Revisit the decision “Return data rather than write the DOM”. Ask yourself: Mutate one returned array and predict the next function call.

**Answer direction:** A defensible solution demonstrates this observable result: Unknown values still fail; the new value adds only its documented item. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 04: Show the input in the result

**Hint 1 — ownership:** Begin from `recommendPacking`. Include the temperature used in the displayed card without changing core input types.

**Hint 2 — reasoning:** Revisit the decision “Validate at both the UI and core boundary”. Ask yourself: Explain why Number("") would hide a missing input.

**Answer direction:** A defensible solution demonstrates this observable result: The displayed input matches the submitted value, including zero. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 05: Strengthen one boundary test

**Hint 1 — ownership:** Begin from `recommendPacking`. Write a new test that would fail for a plausible incorrect comparison.

**Hint 2 — reasoning:** Revisit the decision “Choose an else-if partition”. Ask yourself: Explain why several independent temperature if statements could add contradictory items.

**Answer direction:** A defensible solution demonstrates this observable result: Demonstrate the failure against the wrong comparison before restoring the correct code. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 06: Add a pure explanation formatter

**Hint 1 — ownership:** Begin from `recommendPacking`. Extract result-to-text formatting from the event handler into a small function.

**Hint 2 — reasoning:** Revisit the decision “Return data rather than write the DOM”. Ask yourself: Mutate one returned array and predict the next function call.

**Answer direction:** A defensible solution demonstrates this observable result: Formatting can be tested without a DOM and does not alter the items array. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Answers to the trace questions

The form reads a string → numberFromInput rejects blank and converts a finite number → recommendPacking validates its own contract → the temperature branch chooses a band → the weather branch adds an item → app.js renders the returned data.

The expected examples are in the concepts table. Use them to check your reasoning, then supply a new example of your own. A copied sentence is not evidence that you can trace a changed input.

## When to ask for more help

Ask after you can show a concrete attempt, a specific uncertainty and an observation. Request a smaller hint before a full patch. If you do accept generated code, explain each changed line and run a counterexample you chose independently.
