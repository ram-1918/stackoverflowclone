from datetime import datetime, timedelta
import collections


def convert_timestamp_into_epoch(created_at):
    # converts iso string object to datetime object
    dt_object = datetime.fromisoformat(created_at)
    return dt_object.timestamp()


def epoch_to_readable(epoch, format="%dth %B %Y, at %H:%M %p"):
    # This method takes epoch and return datetime object
    dt_object = datetime.fromtimestamp(epoch)
    return dt_object.strftime(format)

# def get_post_age(created_at):
    timestamp = convert_timestamp_into_epoch(created_at)
    from_post_activity = datetime.fromtimestamp(timestamp)
    today = datetime.now()

    delta = (today - from_post_activity)

    years = delta.days / 365
    years_int = int(years)
    # or (totaldays - (years_int * 365)) // 30
    months = (years - years_int) * 12
    months_int = int(months)
    days = delta.days % 30
    days_int = int(days)
    hours = (days - days_int) * 24  # delta.total_seconds() / 3600
    hours_int = int(hours)
    minutes = (hours - hours_int) * 60
    minutes_int = int(minutes)
    seconds = (minutes - minutes_int) * 60
    seconds_int = int(seconds)

    result = collections.deque([])
    result.appendleft(
        f'{seconds_int} {"second" if seconds_int == 1 else "seconds"}')
    result.appendleft(
        f'{minutes_int} {"minute" if minutes_int == 1 else "minutes"}')
    result.appendleft(f'{hours_int} {"hour" if hours_int == 1 else "hours"}')
    result.appendleft(f'{days_int} {"day" if days_int == 1 else "days"}')
    if months_int:
        result.appendleft(
            f'{months_int} {"month" if months_int == 1 else "months"}')
    if years_int:
        result.appendleft(
            f'{years_int} {"year" if years_int <= 1 else "years"}')
    print(result)
    while len(result) > 2:
        result.pop()

    return ', '.join(result) + ' ago'


def get_post_age(created_at):
    """Calculates the age of a post in years, months, days, hours, minutes, and seconds.

    Args:
        created_at: A datetime object representing the creation time of the post.

    Returns:
        A string representing the age of the post in a human-readable format (e.g., "2 years, 3 months, 5 days ago").
    """
    timestamp = convert_timestamp_into_epoch(created_at)
    from_post_activity = datetime.fromtimestamp(timestamp)

    delta = datetime.now() - from_post_activity

    # Handle potential negative timedelta (future date)
    if delta < timedelta(seconds=0):
        return "The provided date is in the future."

    # Calculate age components efficiently using integer division and modulo
    years = delta.days // 365
    months = (delta.days % 365) // 30
    days = delta.days % 30
    hours = delta.seconds // 3600
    minutes = (delta.seconds % 3600) // 60
    seconds = delta.seconds % 60

    # Build the age string with appropriate units (singular/plural)
    age_parts = []
    if years:
        age_parts.append(f"{years} year{'s' if years > 1 else ''}")
    if months:
        age_parts.append(f"{months} month{'s' if months > 1 else ''}")
    if days:
        age_parts.append(f"{days} day{'s' if days > 1 else ''}")
    if hours:
        age_parts.append(f"{hours} hour{'s' if hours > 1 else ''}")
    if minutes:
        age_parts.append(f"{minutes} minute{'s' if minutes > 1 else ''}")
    if seconds:
        age_parts.append(f"{seconds} second{'s' if seconds > 1 else ''}")

    # Return a comma-separated string with "ago" appended
    return ', '.join(age_parts[:2]) + ' ago'
