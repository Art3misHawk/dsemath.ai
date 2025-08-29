function test (){
  return (
<>
<div className="card border-base-300 border p-3">
  <div className="bg-base-200 p-6">
    <h3 className="text-xl font-semibold">Free</h3>
    <p className="mt-2 flex items-baseline">
      <span className="text-5xl font-semibold tracking-tight">$0</span>
      <span className="ml-1 text-xl font-medium">/month</span>
    </p>
    <p className="mt-4">
      Experience essential features at no cost, setting the foundation for your business
      growth.
    </p>
  </div>
  <div className="p-6">
    <ul className="list-inside list-disc space-y-3" role="list">
      <li>
        <span className="ms-3">For Personal Use</span>
      </li>
      <li>
        <span className="ms-3">20 products</span>
      </li>
      <li>
        <span className="ms-3">Limited Integrations</span>
      </li>
    </ul>
  </div>
  <button className="btn btn-outline border-base-300 btn-block mt-auto">
    Start for Free
  </button>
</div>
<div className="card border-base-300 border p-3">
  <div className="bg-primary/10 rounded-box p-6">
    <div className="flex justify-between">
      <h3 className="text-primary text-xl font-semibold">Premium</h3>
      <div className="badge badge-primary badge-sm">Most Popular</div>
    </div>

    <p className="mt-4 flex items-baseline">
      <span className="text-primary text-5xl font-semibold tracking-tight group-has-[[value=yearly]:checked]:hidden">
        $99
      </span>
      <span className="ml-1 text-xl font-medium">/month</span>
    </p>
    <p className="mt-6">
      Unlock advanced features and elevate your SaaS experience with our premium plan.
    </p>
  </div>
  <div className="p-6">
    <ul className="list-inside list-disc space-y-3" role="list">
      <li>
        <span className="ms-3">Up to 10 Team Members</span>
      </li>
      <li>
        <span className="ms-3">Unlocked all Apps</span>
      </li>
      <li>
        <span className="ms-3">Use all Integrations</span>
      </li>
      <li>
        <span className="ms-3">99.9% Support Response Time</span>
      </li>
    </ul>
  </div>
  <button className="btn btn-primary btn-block mt-auto">Upgrade to Premium</button>
</div>
</>
  )
}
