export default function NoSubscriptions() {
  return (
    <div className="hero min-h-[60vh]">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="mb-8">
            <div className="text-6xl mb-4">📱</div>
            <h1 className="text-3xl font-bold text-base-content">No Subscriptions Yet</h1>
          </div>
          <p className="text-lg text-base-content/70 mb-6">
            You don't have any subscriptions added yet
          </p>
          <p className="text-base text-base-content/60">
            Press the <span className="badge badge-primary">Add</span> button in the navbar to get started
          </p>
        </div>
      </div>
    </div>
  );
}
