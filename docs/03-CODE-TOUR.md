# Code tour and architecture decisions

[Overview](../README.md) · [Concepts](02-CONCEPTS-AND-TRACES.md)

| File | Responsibility |
|---|---|
| [package.json](../package.json) | Names the module format, Node requirement and local commands; private prevents npm publication. |
| [.github/workflows/check.yml](../.github/workflows/check.yml) | Runs the committed checks on GitHub. A workflow file is not evidence that a remote run succeeded. |
| [public/index.html](../public/index.html) | Semantic content, controls and explicit IDs. |
| [public/style.css](../public/style.css) | Presentation, focus indication and project-specific layout. |
| [tools/serve.mjs](../tools/serve.mjs) | Local preview infrastructure; only public/ is served. |
| [tools/check-site.mjs](../tools/check-site.mjs) | Checks referenced local assets exist, without pretending to judge usability. |
| [public/core.js](../public/core.js) | The main input/output rule; no DOM access. |
| [public/app.js](../public/app.js) | Browser events, parsing, rendering and visible errors. |
| [test/core.test.js](../test/core.test.js) | Independent boundary examples for the core contract. |

## Follow one path, not every file

Start at [public/core.js](../public/core.js) and locate `recommendPacking`. Use this trace as a map: The form reads a string → numberFromInput rejects blank and converts a finite number → recommendPacking validates its own contract → the temperature branch chooses a band → the weather branch adds an item → app.js renders the returned data.

The tooling is intentionally separate from the product concept. You can study the local server or CI after the main rule is clear. Neither an HTTP preview server nor a workflow configuration should become a prerequisite for understanding an inline-block box or a small pure function.

## Decision: Validate at both the UI and core boundary

The browser deals in strings, while the pure function accepts numbers. The UI conversion and the core contract protect different callers. This is not duplicated code doing the same job.

**Review question:** Explain why Number("") would hide a missing input.

**Your alternative:** Write a plausible different choice, then give a concrete example that reveals its cost. “More scalable” or “cleaner” is not enough; identify a changed dependency, a new state to manage, or a user-visible failure mode.

## Decision: Choose an else-if partition

The temperature ranges are mutually exclusive. An ordered if/else-if/else chain gives exactly one band. Rain and wind are separate additions after that choice.

**Review question:** Explain why several independent temperature if statements could add contradictory items.

**Your alternative:** Write a plausible different choice, then give a concrete example that reveals its cost. “More scalable” or “cleaner” is not enough; identify a changed dependency, a new state to manage, or a user-visible failure mode.

## Decision: Return data rather than write the DOM

The core can be called from tests or a script without a browser. The UI decides wording and rendering. A fresh array prevents one call’s result from contaminating later calls.

**Review question:** Mutate one returned array and predict the next function call.

**Your alternative:** Write a plausible different choice, then give a concrete example that reveals its cost. “More scalable” or “cleaner” is not enough; identify a changed dependency, a new state to manage, or a user-visible failure mode.

## Change boundaries

A small change should begin in the file that owns its meaning. Change domain rules in the core, wording and interaction in the browser adapter, and layout in the relevant CSS rule. For the static references, semantic information belongs in HTML before styling. For the Git reference, the staged snapshot boundary belongs in the helper rather than being guessed from editor state.

If a story crosses two files, say why. A new unit, weather option or UI station may require a contract, a control and tests to change together. That is a coherent feature boundary, not permission to rewrite unrelated parts of the project.

## Deliberate limits

No persistence, external integration or general framework is hidden behind these files. The preview server is a local development aid, not a production hosting system. A browser screenshot is one observation, not proof of every device or assistive technology. Keep these limits visible when describing your own work.
