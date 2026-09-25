import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-najd-header.html';
import body from '@/components/exact/en-sa-stores-najd-body.html';
import footer from '@/components/exact/en-sa-stores-najd-footer.html';
import inline from '@/components/exact/en-sa-stores-najd.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="en-SA" dir="ltr" />;
}
