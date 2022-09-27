interface ILaunchData {
  id: string;
  mission_name: string;
  launch_date_utc: string;
  launch_site: { site_name: string };
  is_tentative: boolean;
  details: string;
  rocket: {
    rocket_name: string;
    rocket_type: string;
    rocket: { company: string; country: string; description: string };
  };
  launch_success: boolean;
  links: { video_link: string; wikipedia: string };
}

export type { ILaunchData };
