const showFormattedDate = (date, locale) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  if (locale === 'id') {
    return new Date(date).toLocaleDateString('id-ID', options);
  } else {
    return new Date(date).toLocaleDateString('en-EN', options);
  }
};

export { showFormattedDate };
