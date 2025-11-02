NativeScript Ultimate Tab Setup™️ 

https://github.com/NathanWalker/ns-ultimate-tab-setup/assets/457187/7a3f78b3-6507-4fe3-9fac-7ff6c7ce3377

- proper boot to tab route configuration with lazy loaded outlets
- option to route to launch screen for moment of UX splash but also functional needs if need to prepare data for first experience
- ability to route within tab outlets or outside them
- uses pure platform tab setup so it naturally retains routing state whereby if one is deeply navigated and user activated different tab, then returns to that tab > the same deeply navigated state is naturally retained
- ability to customize route transition when navigating away from tabs or back
- ultimate control of tab bar layout with icon/text animations of your own
- example of using custom native views within the project (without using an external third party plugin)
- styled completely with [Tailwind CSS](https://tailwindcss.com/)

## Notes

- This does not use iOS 26+ liquid glass intentionally as it shows custom control over taps.
  - separate branch will be shared in future that shows how to use liquid glass with this setup 
