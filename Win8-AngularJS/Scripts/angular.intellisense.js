function Empty() {

}

angular.Scope = Empty;
angular.Scope.prototype.$apply = function () { };
angular.Scope.prototype.$broadcast = function () { };
angular.Scope.prototype.$destroy = function () { };
angular.Scope.prototype.$digest = function () { };
angular.Scope.prototype.$emit = function () { };
angular.Scope.prototype.$eval = function () { };
angular.Scope.prototype.$evalAsync = function () { };
angular.Scope.prototype.$new = function () { };
angular.Scope.prototype.$on = function () { };
angular.Scope.prototype.$watch = function () { };
angular.Scope.prototype.$id = 1;

intellisense.annotate(angular, {
});

intellisense.annotate(angular.Scope.prototype, {
    '$apply': function () {
        /// <signature>
        ///   <summary>Used to execute an expression in angular from outside of the angular framework.</summary>
        ///   <param name="exp" type="String">An angular expression to be executed.</param>
        ///   <returns>The result of evaluating the expression.</returns>
        /// </signature>
        /// <signature>
        ///   <summary>Used to execute an expression in angular from outside of the angular framework.</summary>
        ///   <param name="exp" type="Function">An angular expression to be executed.</param>
        ///   <returns>The result of evaluating the expression.</returns>
        /// </signature>
    },
    '$broadcast': function (name, args) {
        /// <signature>
        ///   <summary>Dispatches an event name downwards to all child scopes (and their children).</summary>
        ///   <param name="name" type="String">Event name to broadcast.</param>
        ///   <param name="args" type="Object">Optional set of arguments which will be passed onto the event listeners.</param>
        ///   <returns type="Object">Event object.</returns>
        /// </signature>
    },
    '$destroy': function () {
        /// <signature>
        ///   <summary>Removes the current scope (and all of its children) from the parent scope.</summary>
        /// </signature>
    },
    '$digest': function () {
        /// <signature>
        ///   <summary>Processes all of the watchers of the current scope and its children.</summary>
        /// </signature>
    },
    '$emit': function (name, args) {
        /// <signature>
        ///   <summary>Dispatches an event name upwards through the scope hierarchy.</summary>
        ///   <param name="name" type="String">Event name to emit.</param>
        ///   <param name="args" type="Object">Optional set of arguments which will be passed onto the event listeners.</param>
        ///   <returns type="Object">Event object.</returns>
        /// </signature>
    },
    '$eval': function () {
        /// <signature>
        ///   <summary>Executes the expression on the current scope returning the result.</summary>
        ///   <param name="expression" type="String">An angular expression to be executed.</param>
        ///   <returns>The result of evaluating the expression.</returns>
        /// </signature>
        /// <signature>
        ///   <summary>Executes the expression on the current scope returning the result.</summary>
        ///   <param name="expression" type="Function">An angular expression to be executed.</param>
        ///   <returns>The result of evaluating the expression.</returns>
        /// </signature>
    },
    '$evalAsync': function () {
        /// <signature>
        ///   <summary>Executes the expression on the current scope at a later point in time.</summary>
        ///   <param name="expression" type="String">An angular expression to be executed.</param>
        /// </signature>
        /// <signature>
        ///   <summary>Executes the expression on the current scope at a later point in time.</summary>
        ///   <param name="expression" type="Function">An angular expression to be executed.</param>
        /// </signature>
    },
    '$new': function (isolate) {
        /// <signature>
        ///   <summary>Creates a new child scope.</summary>
        ///   <param name="isolate" type="boolean">if true then the scope does not prototypically inherit from the parent scope. </param>
        ///   <returns type="Object">The newly created child scope.</returns>
        /// </signature>
    },
    '$on': function (name, listener) {
        /// <signature>
        ///     <summary>
        ///     Listens on events of a given type.
        ///     <para>The event listener function format is: function(event, args...). The event object passed into the listener has the following attributes:</para>
        ///         <para>- targetScope - {Scope}: the scope on which the event was $emit-ed or $broadcast-ed.</para>
        ///         <para>- currentScope - {Scope}: the current scope which is handling the event.</para>
        ///         <para>- name - {string}: Name of the event.</para>
        ///         <para>- stopPropagation - {function}: calling stopPropagation function will cancel further event propagation (available only for events that were $emit-ed).</para>
        ///         <para>- preventDefault - {function}: calling preventDefault sets defaultPrevented flag to true.</para>
        ///         <para>- defaultPrevented - {boolean}: true if preventDefault was called.</para>
        ///     </summary>
        ///   <param name="name" type="String">Event name to listen on.</param>
        ///   <param name="listener" type="Function">Function to call when the event is emitted.</param>
        ///   <returns type="Function">Returns a deregistration function for this listener.</returns>
        /// </signature>
    },
    '$watch': function (watchExpression, listener, objectEquality) {
        /// <signature>
        ///     <summary>Registers a listener callback to be executed whenever the watchExpression changes.</summary>
        ///   <param name="watchExpression" type="Function|String">Expression that is evaluated on each $digest cycle.</param>
        ///   <param name="listener" type="Function|String">Callback called whenever the return value of the watchExpression changes.</param>
        ///   <param name="objectEquality" type="boolean">Compare object for equality rather than for reference.</param>
        ///   <returns type="Function">Returns a deregistration function for this listener.</returns>
        /// </signature>
    },
})