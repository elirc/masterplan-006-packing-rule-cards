# Building Packing Rule Cards, one decision at a time

[Learning route](00-START-HERE.md) · [Code tour](03-CODE-TOUR.md)

This is a reconstruction of how to approach the finished reference. It explains visible design choices; it is not a transcript of hidden reasoning or a claim that a fictional team performed these steps.

## Start from the contract

Temperature is a finite number. Weather is dry, rain or wind. Below 10 is cold; 10 through values below 25 is mild; 25 and above is warm. Every result owns a fresh items array.

The smallest useful result answers this user need: A traveler wants a tiny script explaining what to pack for three fictional weather conditions. Write the examples before choosing file names. Keep the scope small enough that the decisive behavior fits in one trace.

## Step 1: Write the threshold table

Start with 9.99, 10, 24.99 and 25. Those four values force you to decide equality at both thresholds. Add a weather column and compute the expected item list by hand. Ordinary values such as 15 are useful, but they cannot expose an incorrect < versus <= operator at the boundary.

**Pause and produce evidence:** 9.99, dry. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 2: Keep parsing out of the domain rule

Open app.js to see that form values arrive as text. Blank input is rejected before Number is called. Then open core.js: it still rejects strings, NaN and Infinity because another caller might bypass the form. The core has one clear contract rather than guessing what arbitrary input should mean.

**Pause and produce evidence:** "10" passed directly to core. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 3: Return an explanation-shaped result

The function returns band, weather and items. This structure is sufficient for the UI to display a card and for tests to inspect the actual decision. Do not return a preformatted HTML string from the calculation. The new array is constructed inside each call, so changes to one result do not become hidden global state.

**Pause and produce evidence:** 10, rain. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 4: Show failures without losing inputs

The form prevents its default navigation and catches the core’s errors. It writes a visible error message but leaves the input controls intact. A later successful submission removes the error class. Verify the sequence invalid → corrected, because a page can show the correct result while accidentally keeping error styling from the prior attempt.

**Pause and produce evidence:** Blank input. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Keep the implementation reviewable

A useful commit has one understandable reason to exist. Separate the initial working slice, the checks that expose its important boundaries, and the teaching material that explains it. The published commits in this repository were assembled from verified working files; they are real commits, not fabricated evidence of a long historical development process.

For your own variation, commit at a point where the behavior and evidence agree. Describe the trigger, the resulting behavior and the check in the commit message or review note. Avoid mixing a rule change with unrelated formatting because it makes the learning decision harder to see.

## Stop before adding a platform

The next useful improvement is a sharper example or clearer explanation, not a database, account system or framework migration. Add an abstraction only when it names a real repeated responsibility. You should be able to describe what becomes easier to change after the abstraction and what new complexity it introduces.

**Independent design choice from the original brief:** Choose boundary values and explain each branch.

The reference made one choice, documented in the code tour. You may choose differently in a branch if you first revise the contract and acceptance examples. A deliberate alternative is a stronger learning artifact than an unexplained copy.
