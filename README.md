# Using the event system

## Objectives

- Create a custom event
- Listen for the custom event
- Fire the custom event to another scope
- Run a callback when the event fires
- Unbind the event when the scope is destroyed

## Instructions

In this repo we've got a list of contacts repeated, using a contact directive to display them.

In the directive we've got a remove button. Hook this up to use the event system - firing off the `id` of the contact to be removed from our controller. Use the `remove` function in the controller, as this will be called when the user clicks on the remove button.

Make sure you unsubscribe from these events too!