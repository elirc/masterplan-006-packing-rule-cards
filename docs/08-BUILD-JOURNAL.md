# Build journal: Packing Rule Cards

[Code tour](03-CODE-TOUR.md) · [Actual verification](VERIFICATION.md)

This is a retrospective teaching narrative about the implementation in this repository. It is not a verbatim conversation, fabricated team debate or hidden chain-of-thought transcript. The design explanations below are reviewable rationales tied to the source. Dates and check results belong to the verification record.

## The starting problem

A traveler wants a tiny script explaining what to pack for three fictional weather conditions.

The main temptation was to make the project larger than its learning target. The useful boundary is **variables, booleans and branches**. A finished small example lets you inspect the whole path and ask what each part contributes. Extra infrastructure would add more things to configure before the central idea became clear.

## The first contract

Temperature is a finite number. Weather is dry, rain or wind. Below 10 is cold; 10 through values below 25 is mild; 25 and above is warm. Every result owns a fresh items array.

The contract turned broad intent into examples that can disagree with an implementation. That matters because a plausible-looking result can hide a wrong boundary rule. The examples in the concepts guide were chosen to expose those distinctions, not to make the demo look flawless.

## Decision note 1: Validate at both the UI and core boundary

The browser deals in strings, while the pure function accepts numbers. The UI conversion and the core contract protect different callers. This is not duplicated code doing the same job.

**What a learner should challenge:** Explain why Number("") would hide a missing input.

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## Decision note 2: Choose an else-if partition

The temperature ranges are mutually exclusive. An ordered if/else-if/else chain gives exactly one band. Rain and wind are separate additions after that choice.

**What a learner should challenge:** Explain why several independent temperature if statements could add contradictory items.

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## Decision note 3: Return data rather than write the DOM

The core can be called from tests or a script without a browser. The UI decides wording and rendering. A fresh array prevents one call’s result from contaminating later calls.

**What a learner should challenge:** Mutate one returned array and predict the next function call.

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## What the checks contributed

The pure-function checks exercised the contract independently of the DOM. Browser checks then verified that real controls passed inputs, showed results and recovered from relevant error or empty states. These are complementary forms of evidence.

The record in VERIFICATION.md reports actual local observations. A GitHub Actions workflow is provided, but its remote result must be inspected separately after a push. A screenshot documents one rendered state; it is not a substitute for the interaction and boundary checks.

## What you should do differently on your own build

Start from the same user need but write your own examples first. Choose a small variation from the story list. Predict behavior, implement a slice and compare the result with your prediction. The reference helps you judge a finished result; your journal should record your own uncertainties and discoveries rather than adopting this narrative as if you experienced it.

## The handoff

The next learner can start from README, locate `recommendPacking`, reproduce the example table and attempt one bounded story. That is the intended handoff quality: a working result plus enough evidence and explanation to continue safely. The six practice stories remain unfinished for the learner.
