(function($) {
  // eventDispatcherCreate creates event dispatcher which manage events
  // on object where that function was used.
  // Events are stored in eventsMap.
  // Firstly should be used trigger in object, and then on function outside
  // the object.
  const eventDispatcherCreate = () => {
    let eventsMap = {};

    return {
      on: (eventDispatcherOn = (event, cb) => {
        let events = eventsMap[event];
        if (!events) {
          events = $.Callbacks();
          eventsMap[event] = events;
        }
        events.add(cb);
      }),
      trigger: (eventDispatcherTrigger = (event, data) => {
        let events = eventsMap[event];
        if (!events) {
          return;
        }
        events.fire(data);
      })
    };
  };

  window.inz = $.extend(true, window.inz, {
    eventDispatcher: {
      create: eventDispatcherCreate
    }
  });
})(jQuery);
