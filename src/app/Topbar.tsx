'use client';

import { useEffect, useRef, useState } from "react";

export default function Topbar() {
	const [atTop, setAtTop] = useState(true);
	const loginModal = useRef<HTMLDialogElement | null>(null);
	const registerModal = useRef<HTMLDialogElement | null>(null);

	useEffect(() => {
		const onWindowScroll = () => {
			setAtTop(window.scrollY < 30);
		};
		window.addEventListener("scroll", onWindowScroll);
		onWindowScroll();
		return () => window.removeEventListener("scroll", onWindowScroll);
	}, []);

	return (
		<>
			<div
				id="layout-topbar"
				data-at-top={atTop}
				className="bg-base-100 lg:bg-base-100/90 border-base-300 sticky top-0 z-10 border-b data-[at-top=true]:border-transparent lg:backdrop-blur-sm">
				<div className="container">
					<nav className="flex items-center justify-between py-2">
						<div className="flex items-center gap-2">
							<label
								htmlFor="menu-drawer"
								id="menu-drawer-trigger"
								aria-label="open sidebar"
								className="btn btn-square btn-ghost btn-sm lg:hidden">
								<span className="iconify lucide--menu size-5"></span>
							</label>

							<a href="#" className="text-xl font-semibold">
								dsemath.ai
							</a>
						</div>

						<div className="max-lg:hidden">
							<ul className="menu menu-horizontal gap-2 px-1">
								<li className="font-medium">
									<a href="#home">Home</a>
								</li>
								<li className="font-medium">
									<a href="#features">Features</a>
								</li>
								<li className="font-medium">
									<a href="#integrations">Integrations</a>
								</li>
								<li className="font-medium">
									<a href="#pricing">Pricing</a>
								</li>
								<li className="font-medium">
									<a href="#faq">FAQ</a>
								</li>
							</ul>
						</div>

						<div className="space-x-2">
							<a className="btn btn-ghost btn-sm" onClick={() => registerModal.current?.showModal()}>
								Register
							</a>
							<a className="btn btn-primary btn-sm" onClick={() => loginModal.current?.showModal()}>
								Login
							</a>
						</div>
					</nav>

					<div className="drawer">
						<input id="menu-drawer" type="checkbox" className="drawer-toggle" />
						<div className="drawer-side">
							<label htmlFor="menu-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
							<div className="bg-base-100 min-h-full w-60 p-5">
								<a href="#" className="text-xl font-semibold">
									SaaS Landing
								</a>
								<ul className="menu w-full gap-2 p-0 pt-4">
									<li className="font-medium">
										<a href="#home">Home</a>
									</li>
									<li className="font-medium">
										<a href="#features">Features</a>
									</li>
									<li className="font-medium">
										<a href="#integrations">Integrations</a>
									</li>
									<li className="font-medium">
										<a href="#pricing">Pricing</a>
									</li>
									<li className="font-medium">
										<a href="#faq">FAQ</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<dialog id="login_modal" className="modal" ref={loginModal}>
				<div className="modal-box relative max-w-xs md:max-w-sm">
					<form method="dialog" className="absolute end-2 top-2">
						<button className="btn btn-sm btn-circle btn-ghost">
							<span className="iconify lucide--x size-4"></span>
						</button>
					</form>
					<div className="text-center text-xl font-medium">Login</div>

					<fieldset className="fieldset mt-5">
						<legend className="fieldset-legend">Email Address</legend>
						<label className="input w-full focus:outline-0">
							<span className="iconify lucide--mail text-base-content/80 size-5"></span>
							<input className="grow focus:outline-0" placeholder="Email Address" type="email" />
						</label>
					</fieldset>
					<fieldset className="fieldset">
						<legend className="fieldset-legend">Password</legend>
						<label className="input w-full focus:outline-0">
							<span className="iconify lucide--key-round text-base-content/80 size-5"></span>
							<input className="grow focus:outline-0" placeholder="Password" type="password" />
						</label>
					</fieldset>
					<div className="mt-5 flex items-center justify-end gap-3">
						<button className="btn">Register</button>
						<button className="btn btn-primary">Login</button>
					</div>
					<div className="mt-5 flex items-center gap-3">
						<hr className="border-base-300 grow" />
						<span className="text-base-content/70 text-sm">Continue with</span>
						<hr className="border-base-300 grow" />
					</div>

					<div className="mt-5 flex gap-4">
						<button className="btn grow">
							<span className="iconify lucide--fingerprint size-4"></span>
							Fingerprint
						</button>
						<button className="btn grow">
							<span className="iconify lucide--github size-4"></span>
							Github
						</button>
					</div>
				</div>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>

			<dialog id="register_modal" className="modal" ref={registerModal}>
				<div className="modal-box relative max-w-xs md:max-w-sm">
					<form method="dialog" className="absolute end-2 top-2">
						<button className="btn btn-sm btn-circle btn-ghost">
							<span className="iconify lucide--x size-4"></span>
						</button>
					</form>
					<div className="text-center text-xl font-medium">Create an Account</div>

					<fieldset className="fieldset mt-5">
						<legend className="fieldset-legend">Username</legend>
						<label className="input w-full focus:outline-0">
							<span className="iconify lucide--user text-base-content/80 size-5"></span>
							<input className="grow focus:outline-0" placeholder="Username" type="text" />
						</label>
					</fieldset>
					<fieldset className="fieldset">
						<legend className="fieldset-legend">Email Address</legend>
						<label className="input w-full focus:outline-0">
							<span className="iconify lucide--mail text-base-content/80 size-5"></span>
							<input className="grow focus:outline-0" placeholder="Email Address" type="email" />
						</label>
					</fieldset>
					<fieldset className="fieldset">
						<legend className="fieldset-legend">Password</legend>
						<label className="input w-full focus:outline-0">
							<span className="iconify lucide--key-round text-base-content/80 size-5"></span>
							<input className="grow focus:outline-0" placeholder="Password" type="password" />
						</label>
					</fieldset>
					<div className="mt-5 flex items-center justify-end gap-3">
						<button className="btn">Register</button>
						<button className="btn btn-primary">Login</button>
					</div>
					<div className="mt-5 flex items-center gap-3">
						<hr className="border-base-300 grow" />
						<span className="text-base-content/70 text-sm">Continue with</span>
						<hr className="border-base-300 grow" />
					</div>

					<div className="mt-5 flex gap-4">
						<button className="btn grow">
							<span className="iconify lucide--fingerprint size-4"></span>
							Fingerprint
						</button>
						<button className="btn grow">
							<span className="iconify lucide--github size-4"></span>
							Github
						</button>
					</div>
				</div>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
		</>
	);
};
