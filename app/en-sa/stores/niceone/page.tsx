import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-niceone-header.html';
import body from '@/components/exact/en-sa-stores-niceone-body.html';
import footer from '@/components/exact/en-sa-stores-niceone-footer.html';
import inline from '@/components/exact/en-sa-stores-niceone.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="en-SA" dir="ltr" />;
}
